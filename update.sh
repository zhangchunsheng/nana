#!/bin/bash
cd love-you-ten-thousand 
npm run build
rm -rf webroot/HappyNewYear2024/*
cp -r love-you-ten-thousand/dist/* webroot/HappyNewYear2024
git add webroot
git commit -a -m 'update'
git push -u origin main
