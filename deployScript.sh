#!/bin/bash

directory="evaluatingMaterial-App"

if [ ! -d "$directory" ]; then
    git clone "https://github.com/Raytem/$directory"
fi

cd "$directory"
git pull
 
docker-compose up -d --build
