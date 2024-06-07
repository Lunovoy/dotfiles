#!/bin/sh

if [ "$(xset -q | grep "LED mask:" | awk '{ print $10 }')" == "00000000" ] ; then
        echo "en"
else
        echo "ru"
fi