#!/bin/sh

rm -rf ./public/*
hugo --gc --minify
cd public

git add .
git commit -m "website update"
git push -u origin main