#!/bin/bash

directory="komfort"

if [ ! -d "$directory" ]; then
    git clone "https://github.com/Raytem/$directory"
fi

cd "$directory"
git pull

sudo docker-compose down
docker rmi app
docker system prune --force
sudo docker-compose up -d --build
