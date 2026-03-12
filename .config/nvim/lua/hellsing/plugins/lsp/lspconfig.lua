return {
  "neovim/nvim-lspconfig",
  event = { "BufReadPre", "BufNewFile" },
  dependencies = {
    "saghen/blink.cmp",

    { "antosha417/nvim-lsp-file-operations", config = true },
    { "folke/neodev.nvim", opts = {} },
  },

  config = function()
    -- Get blink.cmp capabilities
    local has_blink, blink = pcall(require, "blink.cmp")
    local capabilities = vim.lsp.protocol.make_client_capabilities()
    if has_blink then
      capabilities = blink.get_lsp_capabilities(capabilities)
    end

    local keymap = vim.keymap -- for conciseness

    -- Shared filetypes for JS/TS ecosystem
    local js_ts_filetypes = {
      "javascript",
      "javascriptreact",
      "javascript.jsx",
      "typescript",
      "typescriptreact",
      "typescript.tsx",
    }

    -- Shared inlay hints settings for JS/TS
    local js_ts_inlay_hints = {
      parameterNames = { enabled = "all" },
      parameterTypes = { enabled = true },
      variableTypes = { enabled = true },
      propertyDeclarationTypes = { enabled = true },
      functionLikeReturnTypes = { enabled = true },
    }

    vim.api.nvim_create_autocmd("LspAttach", {
      group = vim.api.nvim_create_augroup("UserLspConfig", {}),
      callback = function(ev)
        -- Buffer local mappings.
        -- See `:help vim.lsp.*` for documentation on any of the below functions
        local opts = { buffer = ev.buf, silent = true }

        -- set keybinds

        opts.desc = "Show LSP references"
        keymap.set("n", "gR", function()
          Snacks.picker.lsp_references()
        end, opts)

        opts.desc = "Go to declaration"
        keymap.set("n", "gD", vim.lsp.buf.declaration, opts) -- go to declaration

        opts.desc = "Show LSP definitions"
        keymap.set("n", "gd", function()
          Snacks.picker.lsp_definitions()
        end, opts)

        opts.desc = "Show LSP implementations"
        keymap.set("n", "gi", function()
          Snacks.picker.lsp_implementations()
        end, opts)

        opts.desc = "Show LSP type definitions"
        keymap.set("n", "gt", function()
          Snacks.picker.lsp_type_definitions()
        end, opts)

        opts.desc = "See available code actions"
        keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts) -- see available code actions, in visual mode will apply to selection

        opts.desc = "Smart rename"
        keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts) -- smart rename

        opts.desc = "Show buffer diagnostics"
        keymap.set("n", "<leader>D", function()
          Snacks.picker.diagnostics({ bufnr = 0 })
        end, opts)

        opts.desc = "Show line diagnostics"
        keymap.set("n", "<leader>d", vim.diagnostic.open_float, opts) -- show diagnostics for line

        opts.desc = "Go to previous diagnostic"
        keymap.set("n", "[d", function()
          vim.diagnostic.jump({ count = -1, float = true })
        end, opts) -- jump to previous diagnostic in buffer

        opts.desc = "Go to next diagnostic"
        keymap.set("n", "]d", function()
          vim.diagnostic.jump({ count = 1, float = true })
        end, opts) -- jump to next diagnostic in buffer

        opts.desc = "Show documentation for what is under cursor"
        keymap.set("n", "K", vim.lsp.buf.hover, opts) -- show documentation for what is under cursor

        opts.desc = "Restart LSP"
        keymap.set("n", "<leader>rs", ":LspRestart<CR>", opts) -- mapping to restart lsp if necessary
      end,
    })

    local on_attach = require("hellsing.plugins.lsp.lspconfig").on_attach
    local util = require("lspconfig/util")

    -- Change the Diagnostic symbols in the sign column (gutter)
    vim.diagnostic.config({
      signs = {
        text = {
          [vim.diagnostic.severity.ERROR] = " ",
          [vim.diagnostic.severity.WARN] = " ",
          [vim.diagnostic.severity.INFO] = "󰠠 ",
          [vim.diagnostic.severity.HINT] = " ",
        },
        numhl = {
          [vim.diagnostic.severity.ERROR] = "",
          [vim.diagnostic.severity.WARN] = "",
          [vim.diagnostic.severity.HINT] = "",
          [vim.diagnostic.severity.INFO] = "",
        },
      },
    })

    local servers = {
      -- configure gopls server
      gopls = {
        on_attach = on_attach,
        cmd = { "gopls" },
        filetypes = { "go", "gomod", "gowork", "gotmpl" },
        root_markers = { "go.work", "go.mod", ".git" },
        settings = {
          gopls = {
            completeUnimported = true,
            usePlaceholders = true,
            staticcheck = true,
            gofumpt = true,
            analyses = {
              unusedparams = true,
            },
          },
        },

        rust_analyzer = {
          on_attach = on_attach,
          filetypes = { "rust" },
          root_markers = { "go.work", "go.mod", ".git" },
          root_dir = util.root_pattern("Cargo.toml"),
          settings = {
            ["rust-analyzer"] = {
              cargo = {
                allFeatures = true,
              },
            },
          },
        },
        -- vim.api.nvim_create_autocmd("BufWritePre", {
        --   pattern = "*.go",
        --   callback = function()
        --     local params = vim.lsp.util.make_range_params()
        --     params.context = { only = { "source.organizeImports" } }
        --     local result = vim.lsp.buf_request_sync(0, "textDocument/codeAction", params)
        --     for cid, res in pairs(result or {}) do
        --       for _, r in pairs(res.result or {}) do
        --         if r.edit then
        --           local enc = (vim.lsp.get_client_by_id(cid) or {}).offset_encoding or "utf-16"
        --           vim.lsp.util.apply_workspace_edit(r.edit, enc)
        --         end
        --       end
        --     end
        --     vim.lsp.buf.format({ async = false })
        --   end,
        -- }),
      },
      -- configure svelte server
      svelte = {
        on_attach = function(client, bufnr)
          vim.api.nvim_create_autocmd("BufWritePost", {
            pattern = { "*.js", "*.ts" },
            callback = function(ctx)
              -- Here use ctx.match instead of ctx.file
              client.notify("$/onDidChangeTsOrJsFile", { uri = ctx.match })
            end,
          })
        end,
      },
      -- configure graphql language server
      graphql = {
        filetypes = { "graphql", "gql", "svelte", "typescriptreact", "javascriptreact" },
      },
      -- configure emmet language server
      emmet_ls = {
        filetypes = { "html", "typescriptreact", "javascriptreact", "css", "sass", "scss", "less", "svelte" },
      },

      ts_ls = {
        on_attach = function(client, bufnr)
          require("workspace-diagnostics").populate_workspace_diagnostics(client, bufnr)
        end,
        settings = {
          typescript = {
            inlayHints = {
              includeInlayEnumMemberValueHints = true,
              includeInlayFunctionLikeReturnTypeHints = true,
              includeInlayFunctionParameterTypeHints = true,
              includeInlayParameterNameHints = "all",
              includeInlayParameterNameHintsWhenArgumentMatchesName = true,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayVariableTypeHints = true,
              includeInlayVariableTypeHintsWhenTypeMatchesName = true,
            },
          },
          javascript = {
            inlayHints = {
              includeInlayEnumMemberValueHints = true,
              includeInlayFunctionLikeReturnTypeHints = true,
              includeInlayFunctionParameterTypeHints = true,
              includeInlayParameterNameHints = "all",
              includeInlayParameterNameHintsWhenArgumentMatchesName = true,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayVariableTypeHints = true,
              includeInlayVariableTypeHintsWhenTypeMatchesName = true,
            },
          },
        },
      },
      -- configure lua server (with special settings)
      lua_ls = {
        settings = {
          Lua = {
            runtime = { version = "LuaJIT" },
            telemetry = { enabled = false },
            -- make the language server recognize "vim" global
            diagnostics = {
              globals = { "vim" },
            },
            workspace = {
              library = vim.api.nvim_get_runtime_file("", true),
            },
            completion = {
              callSnippet = "Replace",
            },
          },
        },
      },
    }

    -- Configure all servers with shared capabilities
    local server_names = {}
    for name, config in pairs(servers) do
      config.capabilities = capabilities
      config.on_attach = on_attach
      vim.lsp.config[name] = config
      table.insert(server_names, name)
    end

    vim.lsp.enable(server_names)

    require("mason").setup()
    require("mason-lspconfig").setup()
  end,
}
