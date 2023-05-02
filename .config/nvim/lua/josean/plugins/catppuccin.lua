-- import catppuccin plugin safely
local setup, catppuccin = pcall(require, "catppuccin")
if not setup then
  return
end

catppuccin.setup({
  flavour = "mocha", -- latte, frappe, macchiato, mocha
  transparent_background = true,
})
