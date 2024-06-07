#!/bin/sh

# if [ -f "/sys/class/net/eno1/carrier" ]; then
#     echo "LAN connected"
if [ -f "/sys/class/net/wlan0/carrier" ]; then
    echo "$(nmcli -t -f active,ssid, dev wifi | grep -E '^yes' | cut -d\' -f2 | cut -d ':' -f2)"
else
    echo "No network"
fi