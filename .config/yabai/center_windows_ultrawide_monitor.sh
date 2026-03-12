#!/bin/bash

DISPLAY_WIDTH=$(yabai -m query --displays --display | jq '.frame.w')

# только ultrawide
if [ "$DISPLAY_WIDTH" -lt 3000 ]; then
    exit 0
fi

WINDOW_COUNT=$(yabai -m query --windows --space | jq 'length')

SPACE=$(yabai -m query --spaces --space | jq '.index')

# 1 окно
if [ "$WINDOW_COUNT" -eq 1 ]; then
    yabai -m space $SPACE --padding abs:12:12:800:800
fi

# 2 окна
if [ "$WINDOW_COUNT" -eq 2 ]; then
    yabai -m space $SPACE --padding abs:12:12:500:500
fi

# 3+
if [ "$WINDOW_COUNT" -ge 3 ]; then
    yabai -m space $SPACE --padding abs:12:12:12:12
fi
