#!/usr/bin/env bash
if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d "apollo" ]; then
    git clone https://github.com/SilverBlogTeam/apollo.git
    cd apollo
    ln -s $(pwd)/static ../static/apollo
fi
if [ -f "config.json" ]; then
    cp config.example.json config.json
    vim config.json
fi
