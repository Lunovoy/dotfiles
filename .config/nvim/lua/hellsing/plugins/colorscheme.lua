-- return {
--   "rose-pine/neovim",
--   lazy = false, -- make sure we load this during startup if it is your main colorscheme
--   priority = 1000, -- make sure to load this before all the other start plugins
--   config = function()
--     require("rose-pine").setup({
--       variant = "auto", -- auto, main, moon, or dawn
--       dark_variant = "moon",
--       extend_background_behind_borders = true,
--       styles = {
--         transparency = false,
--       },
--     })
--     vim.cmd("colorscheme rose-pine")
--   end,
-- }
return {
  "sainnhe/gruvbox-material",
  lazy = false,
  priority = 1000,
  config = function()
    -- Optionally configure and load the colorscheme
    -- directly inside the plugin declaration.
    vim.g.gruvbox_material_enable_italic = true
    vim.g.gruvbox_material_background = "soft"
    vim.cmd.colorscheme("gruvbox-material")
  end,
}
