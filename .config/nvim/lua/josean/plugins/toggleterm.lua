local status, toggleterm = pcall(require, "toggleterm")
if not status then
  return
end

toggleterm.setup({
  size = 13,
  open_mapping = [[<c-n>]],
  shade_filetypes = {},
  shade_terminals = true,
  shading_factor = "1",
  start_in_insert = true,
  persist_size = true,
  direction = "horizontal",
  shell = "/bin/zsh",
})

function _G.set_terminal_keymaps()
  local opts = { buffer = 0 }
  vim.keymap.set("t", "<esc>", [[<C-\><C-n>]], opts)
  vim.keymap.set("t", "kj", [[<C-\><C-n>]], opts)
  vim.keymap.set("t", "<C-h>", [[<Cmd>wincmd h<CR>]], opts)
  vim.keymap.set("t", "<C-j>", [[<Cmd>wincmd j<CR>]], opts)
  vim.keymap.set("t", "<C-k>", [[<Cmd>wincmd k<CR>]], opts)
  vim.keymap.set("t", "<C-l>", [[<Cmd>wincmd l<CR>]], opts)
  vim.keymap.set("t", "<C-w>", [[<C-\><C-n><C-w>]], opts)
end

vim.cmd("autocmd! TermOpen term://*toggleterm#* lua set_terminal_keymaps()")
