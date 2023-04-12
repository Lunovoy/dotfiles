# Dotfiles

## Setup Awesome for Arch

1. Install packages / dependencies
```
yay -S picom-git awesome-git acpid git mpd ncmpcpp wmctrl \
firefox lxappearance gucharmap thunar alacritty neovim polkit-gnome \
xdotool xclip scrot brightnessctl alsa-utils pulseaudio jq acpi rofi \
inotify-tools zsh mpdris2 bluez bluez-utils bluez-plugins acpi acpi_call \
playerctl redshift cutefish-cursor-themes-git cutefish-icons upower xorg xorg-init tar
```

```
sudo pacman -S ripgrep
```

 2. Make backup of directories that will be changed (optional)

 ```
cd 
mkdir .backup_config
cp -r ~/.config/* .backup_config/
cp -r ~/.mpd .backup_config/
cp -r ~/.ncmpcpp .backup_config/
cp -r ~/.themes .backup_config/
 ```

3. Clone this repo

```
cd
clear
git clone https://github.com/Lunovoy/dotfiles
cd dotfiles
```

4. Copy the dotfiles in required places

```
cp -rf .config/* ~/.config/
cp -rf extras/mpd ~/.mpd
cp -rf extras/ncmpcpp ~/.ncmpcpp
cp -rf extras/fonts ~/.fonts
cp -rf extras/scripts ~/.scripts
cp -rf extras/oh-my-zsh ~/.oh-my-zsh
```

5. Extract Gtk-theme

```
mkdir ~/.themes
cp ./themes/* ~/.themes
cd ~/.themes
tar -xf Awesthetic.tar
tar -xf Cutefish-light-modified.tar
rm Awesthetic.tar Cutefish-light-modified.tar
```

6. Make some files executeable

```
cd ~/.config/awesome/misc
sudo chmod -R +x *
```

7. Startup services

```
systemctl --user enable mpd
sudo systemctl enable bluetooth
```

8. Done

    * if your already logged into awesome, reload it
    * else, Login to AwesomeWM



## Setup system settings

* Install packages for /tools

```
sudo pacman -S bluez-utils networkmanager
```

* Configure touchpad settings

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



