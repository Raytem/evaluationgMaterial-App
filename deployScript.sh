#!/bin/bash

directory="evaluatingMaterial-App"

if [ ! -d "$directory" ]; then
    git clone "https://github.com/Raytem/$directory"
fi

cd "$directory"
git pull

sudo docker-compose down
docker system prune -a --force
sudo docker-compose up -d --build
