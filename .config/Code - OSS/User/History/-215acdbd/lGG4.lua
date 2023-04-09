-- a minimal bar
-- ~~~~~~~~~~~~~

-- requirements
-- ~~~~~~~~~~~~
local awful         = require("awful")
local gears         = require("gears")
local wibox         = require("wibox")
local beautiful     = require("beautiful")
local helpers       = require("helpers")
local dpi           = beautiful.xresources.apply_dpi



-- misc/vars
-- ~~~~~~~~~





-- connect to screen
-- ~~~~~~~~~~~~~~~~~

awful.screen.connect_for_each_screen(function(s)

-- -- screen width
local screen_height = s.geometry.height
local screen_width = s.geometry.width




--     -- widgets
--     -- ~~~~~~~

    -- systray
    local systray = wibox.widget.systray()
    
    -- local my_round_systray = wibox.widget {
    -- {
    --     wibox.widget.systray(),
    --     left   = 10,
    --     top    = 2,
    --     bottom = 2,
    --     right  = 10,
    --     widget = wibox.container.margin,
    -- },
    -- bg         = "#ff0000",
    -- shape      = gears.shape.rounded_rect,
    -- shape_clip = true,
    -- widget     = wibox.container.background,
    -- }
    

--     -- taglist
    local taglist = require("layout.bar.taglist")(s)


    -- launcher {{
    local launcher = wibox.widget{
        widget = wibox.widget.textbox,
        markup = helpers.colorize_text("", beautiful.fg_color),
        font = beautiful.icon_var .. "21",
        align = "center",
        valign = "center",
    }

    launcher:buttons(gears.table.join({
        awful.button({ }, 1, function ()
            awful.spawn.with_shell(require("misc").rofiCommand, false)
        end)

    }))
--     -- }}



    -- wifi
    local wifi = wibox.widget{
        markup = "",
        font = beautiful.icon_var .. "15",
        valign = "center",
        align = "center",
        widget = wibox.widget.textbox
    }

    -- cc
    local cc_ic = wibox.widget{
        markup = "",
        font = beautiful.icon_var .. "17",
        valign = "center",
        align = "center",
        widget = wibox.widget.textbox
    }

    -- battery widget HORIZONTAL
--------------------

-- battery icon
local bat_icon = wibox.widget{
    markup = helpers.colorize_text("", beautiful.green_color),
    font = beautiful.icon_var .. "11",
    align = "center",
    valign = "center",
    widget = wibox.widget.textbox
}

-- battery progressbar
local battery_progress = wibox.widget{
	color				= beautiful.green_color,
	background_color	= "#00000000",
    forced_width        = dpi(30),
    border_width        = dpi(1),
    border_color        = beautiful.fg_color .. "A6",
    paddings             = dpi(2),
    bar_shape           = helpers.rrect(dpi(2)),
	shape				= helpers.rrect(dpi(5)),
    value               = 70,
	max_value 			= 100,
    widget              = wibox.widget.progressbar,
}

-- battery half circle thing
local battery_border_thing = wibox.widget{
    {
        wibox.widget.textbox,
        widget = wibox.container.background,
        bg = beautiful.fg_color .. "A6",
        forced_width = dpi(8.2),
        forced_height = dpi(8.2),
        shape = function(cr, width, height)
            gears.shape.pie(cr,width, height, 0, math.pi)
        end
    },
    direction = "east",
    widget = wibox.container.rotate()
}

-- percentage
local bat_txt = wibox.widget{
    widget = wibox.widget.textbox,
    markup = "100%",
    font = beautiful.font_var .. "Medium 11",
    valign = "center",
    align = "center"
}

-- init battery
local battery = wibox.widget{
    {
        {
            bat_icon,
            {
                battery_progress,
                -- battery_border_thing,
                layout = wibox.layout.fixed.horizontal,
                spacing = dpi(-1.6)
            },
            layout = wibox.layout.fixed.horizontal,
            spacing = dpi(1)
        },
        widget = wibox.container.margin,
        margins = {top = dpi(3),bottom = dpi(3)}
    },
    bat_txt,
    layout = wibox.layout.fixed.horizontal,
    spacing = dpi(6)
}


awesome.connect_signal("signal::battery", function(value, state)
    battery_progress.value = value
    bat_txt.markup = value .. "%"

    if state == 1 then
        bat_icon.visible = true
    else
        bat_icon.visible = false
    end
end)

---------------------------------------------------------- EOF Battery




    -- --------------------
    -- -- battery widget
    -- local bat_icon = wibox.widget{
    --     markup = "<span foreground='" .. beautiful.black_color .. "'></span>",
    --     font = beautiful.icon_var .. "10",
    --     align = "center",
    --     valign = "center",
    --     widget = wibox.widget.textbox
    -- }

    -- local battery_progress = wibox.widget{
    -- 	color				= beautiful.green_color,
    -- 	background_color	= beautiful.fg_color .. "00",
    --     forced_width        = dpi(27),
    --     border_width        = dpi(0.5),
    --     border_color        = beautiful.fg_color .. "A6",
    --     paddings             = dpi(2),
    --     bar_shape           = helpers.rrect(dpi(2)),
    -- 	shape				= helpers.rrect(dpi(4)),
    --     value               = 70,
    -- 	max_value 			= 100,
    --     widget              = wibox.widget.progressbar,
    -- }

    -- local battery_border_thing = wibox.widget{
    --         wibox.widget.textbox,
    --         widget = wibox.container.background,
    --         border_width        = dpi(0),
    --         bg = beautiful.fg_color .. "A6",
    --         forced_width = dpi(9.4),
    --         forced_height = dpi(9.4),
    --         shape = function(cr, width, height)
    --             gears.shape.pie(cr,width, height, 0, math.pi)
    --         end
    -- }

    -- local battery = wibox.widget{
    --     {
    --         {
    --             {
    --                 battery_border_thing,
    --                 direction = "south",
    --                 widget = wibox.container.rotate
    --             },
    --             {
    --                 battery_progress,
    --                 direction = "east",
    --                 widget = wibox.container.rotate()
    --             },
    --             layout = wibox.layout.fixed.vertical,
    --             spacing = dpi(-4)
    --         },
    --         {
    --             bat_icon,
    --             margins = {top = dpi(3)},
    --             widget = wibox.container.margin,
    --         },
    --         layout = wibox.layout.stack,
    --     },
    --     widget = wibox.container.margin,
    --     margins = {left = dpi(7.47),right = dpi(7.47)}
    -- }
    -- -- Eo battery
    -- -----------------------------------------------------



    cc_ic:buttons{gears.table.join(
        awful.button({ }, 1, function ()
            cc_toggle(s)
        end)
    )}

-- date_clock
local date_clock = wibox.widget{
    widget = wibox.widget.textclock,
    format = "%a, %d %b",
    font = beautiful.font_var .. "Medium 13",
    valign = "center",
    align = "center"
}

    -- clock
    ---------------------------
    local clock = wibox.widget{
        {
            widget = wibox.widget.textclock,
            format = "%I",
            font = beautiful.font_var .. "Bold 12",
            valign = "center",
            align = "center"
        },
        {
            widget = wibox.widget.textclock,
            format = "%M",
            font = beautiful.font_var .. "Medium 12",
            valign = "center",
            align = "center"
        },
        {
            date_clock,
            margins = {left = dpi(12), right = dpi(8)},
            widget = wibox.container.margin
        },
        layout = wibox.layout.fixed.horizontal,
        spacing = dpi(3)
    }
    -- Eo clock
    ------------------------------------------




    -- update widgets accordingly
    -- ~~~~~~~~~~~~~~~~~~~~~~~~~~
    awesome.connect_signal("signal::battery", function(value, state)
        battery_progress.value = value


        if state == 1 then
            bat_icon.visible = true
        else
            bat_icon.visible = false
        end

    end)

    awesome.connect_signal("signal::wifi", function (value)
        if value then
            wifi.markup = helpers.colorize_text("", beautiful.fg_color .. "CC")
        else
            wifi.markup = helpers.colorize_text("", beautiful.fg_color .. "99")
        end
        
    end)


    -- wibar
    s.wibar_wid = awful.wibar({
        screen      = s,
        visible     = true,
        ontop       = false,
        type        = "dock",
        --width      = screen_width - beautiful.useless_gap * 4,
        width      = screen_width,
        -- shape       = helpers.rrect(beautiful.rounded - 5),
        bg          =  beautiful.bg_color,
        height       = dpi(34)
    })


    -- wibar placement
    awful.placement.top(s.wibar_wid, {margins = beautiful.useless_gap * 0})
    s.wibar_wid:struts{top = s.wibar_wid.height + beautiful.useless_gap * 1 }
    


    -- bar setup
    s.wibar_wid:setup {
        {
            {
                clock,
                margins = {left = dpi(8), right = dpi(8)},
                widget = wibox.container.margin
            },
                                   
            {
                taglist,
                margins = {left = dpi(8), right = dpi(8)},
                widget = wibox.container.margin
            },
            {
                {
                    systray,
                    margins = {left = dpi(8), right = dpi(8), top = dpi(8), bottom = dpi(10)},
                    widget = wibox.container.margin
                },
                {
                    wifi,

                    margins = {left = dpi(8), top = dpi(8), bottom = dpi(10)},
                    widget = wibox.container.margin
                },
                {
                    battery,
                    margins = {left = dpi(8), right = dpi(8), top = dpi(6), bottom = dpi(6)},
                    widget = wibox.container.margin
                    -- layout = wibox.layout.fixed.horizontal,
                },
                {
                    cc_ic,
                    -- clock,
                    layout = wibox.layout.fixed.horizontal,
                    spacing = dpi(20)
                },
                layout = wibox.layout.fixed.horizontal,
                spacing = dpi(20)
            },
            layout = wibox.layout.align.horizontal,
            expand = "none"
        },
        layout = wibox.container.margin,
        margins = {left = dpi(10), right = dpi(10)}
    }

end)
