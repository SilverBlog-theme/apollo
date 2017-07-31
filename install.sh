#!/usr/bin/env bash
if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d "Apollo" ]; then
    git clone https://github.com/SilverBlogTeam/Apollo.git
    cd Apollo
fi
ln -s $(pwd)/static ../static/Apollo
if [ -f "config.json" ]; then
    cp config.example.json config.json
    vim config.json
fi
