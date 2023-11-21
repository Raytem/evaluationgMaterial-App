#!/bin/bash

directory="evaluatingMaterial-App"

if [ ! -d "$directory" ]; then
    git clone "https://github.com/Raytem/$directory"
fi

cd "$directory"
git pull
 
sudo docker-compose down
sudo docker image ls -q | xargs docker image rm -f
sudo docker-compose up -d --build
