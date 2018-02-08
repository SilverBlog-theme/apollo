#!/usr/bin/env bash
if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d "apollo" ]; then
    git clone https://github.com/SilverBlogTeam/apollo.git
fi
ln -sv ../apollo/static ./static/apollo
cd apollo
if [ -f "config.json" ]; then
    cp config.example.json config.json
    vim config.json
fi
