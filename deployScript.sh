#!/bin/bash

directory="evaluatingMaterial-App"

if [ ! -d "$directory" ]; then
    git clone "https://github.com/Raytem/$directory"
fi

cd "$directory"
git pull
 
docker-compose down
docker image ls -q | xargs docker image rm -f
docker-compose up -d --build
