#!/bin/bash

# имя сессии
SESSION="giltest"
WORKDIR="$HOME/Development/uc/giltestold"

# создать новую сессию в фоне, задать директорию и имя первого окна
tmux new-session -d -s "$SESSION" -c "$WORKDIR" -n "old"

# окно 2
tmux new-window -t "$SESSION:" -c "$WORKDIR" -n "old term"
# разделить окно 2 вертикально
tmux split-window -h -t "$SESSION:2" -c "$WORKDIR"

# окно 3
tmux new-window -t "$SESSION:" -c "$WORKDIR" -n "new"

# окно 4
tmux new-window -t "$SESSION:" -c "$WORKDIR" -n "new term"
# разделить окно 4 вертикально
tmux split-window -h -t "$SESSION:4" -c "$WORKDIR"


