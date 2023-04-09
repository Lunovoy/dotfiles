--[[
    A random rice. i guess.
    source: https://github.com/saimoomedits/dotfiles
]]


pcall (require, "luarocks.loader")


-- home variable 🏠
home_var        = os.getenv("HOME")


-- user preferences ⚙️
user_likes      = {
    
    -- aplications
    wifimenu    = "/home/hellsing/.local/bin/wifimenu",
    term        = "alacritty",
    editor      = "alacritty -e " .. "nvim",
    code        = "vscode",
    web         = "firefox",
    music       = "alacritty --class 'music' --config-file " .. home_var .. "/.config/alacritty/ncmpcpp.yml -e ncmpcpp ",
    files       = "thunar",
    
    
    -- your profile
    username = os.getenv("USER"):gsub("^%l", string.upper),
    userdesc = "@idd"
}



-- theme 🖌️
require("theme")

-- configs ⚙️
require("config")

-- miscallenous ✨
require("misc")

-- signals 📶
require("signal")

-- ui elements 💻
require("layout")

--awful.spawn.with_shell("~/.config/awesome/autorun.sh")
