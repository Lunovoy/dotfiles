return {
  {
    "echasnovski/mini.indentscope",
    version = false,
    opts = {
      symbol = "╎",
    },
  },

  {
    "echasnovski/mini.cursorword",
    version = "*",
    lazy = true,
    event = "CursorMoved",
    config = function()
      require("mini.cursorword").setup()
    end,
  },
  -- Surround actions (sa=add, sd=delete, sr=replace)
  {
    "nvim-mini/mini.surround",
    version = "*",
    event = "BufReadPost",
    opts = {},
    config = function()
      require("mini.surround").setup()
    end,
  },

  -- Auto-pairs
  {
    "nvim-mini/mini.pairs",
    version = "*",
    event = "InsertEnter",
    opts = {},
    config = function()
      require("mini.pairs").setup()
    end,
  },

  {
    "nvim-mini/mini.splitjoin",
    version = "*",
    config = function()
      require("mini.splitjoin").setup({
        mappings = { toggle = "sj" },
      })
    end,
  },

  {
    "nvim-mini/mini.notify",
    version = "*",
    config = function()
      require("mini.notify").setup({
        lsp_progress = {
          enable = false,
        },
      })
    end,
  },
}
