return {
  "shortcuts/no-neck-pain.nvim",
  version = "*",
  config = function()
    require("no-neck-pain").setup({
      buffers = {
        -- colors = {
        --   background = "tokyonight-moon",
        --   blend = -0.2,
        -- },
        right = {
          enabled = false,
        },
        wo = {
          fillchars = "eob: ",
        },
      },
    })

    -- set keymaps
    local keymap = vim.keymap -- for conciseness
    keymap.set("n", "<leader>np", "<cmd>NoNeckPain<CR>", { desc = "Toggle center buffer" })
  end,
}
