return {
  "windwp/nvim-ts-autotag",
  event = { "InsertEnter" },

  config = function()
    -- import nvim-ts-autotag
    local autotag = require("nvim-ts-autotag")

    -- configure autotag
    autotag.setup()
  end,
}
