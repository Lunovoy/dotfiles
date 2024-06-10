# Dotfiles

## Setup Arch

1. Install packages / dependencies

this one for nvim

```
sudo pacman -Sy neovim ripgrep lazygit
```

for natural backlight control

```
yay -S brillo
```

And more other things for system, i don`t remember all of dependencies

## Setup system settings

Check this settings carefully

- Configure touchpad settings

  1. Find your touchpad

  ```
  xinput list
  ```

  2. Create conf file /etc/X11/xorg.conf.d/30-touchpad.conf

  ```
  Section "InputClass"
      Identifier "SYNA3602:00 093A:0255 Touchpad"
      Driver "libinut"
      Option "NaturalScrolling" "true"
      Option "Tapping" "on"
  EndSection
  ```

- Configure keyboard layout /etc/X11/xorg.conf.d/00-keyboard.conf
  Пример:
  ```
  Section "InputClass"
      Identifier "system-keyboard"
      MatchIsKeyboard "on"
      Option "XkbLayout" "us,ru"
      Option "XkbModel" "pc105"
      Option "XkbOptions" "grp:alt_shift_toggle"
  EndSection
  ```
- Autostart X at login ~/.zshrc

  ```
  if [ -z "${DISPLAY}" ] && [ "${XDG_VTNR}" -eq 1 ]; then
  exec startx
  fi
  ```

- Set qt theme
  ```
  sudo nano /etc/environment and add the line QT_QPA_PLATFORMTHEME=qt5ct
  ```
