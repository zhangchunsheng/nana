#! /bin/bash
git commit -a -m 'update'
git push -u origin main
rm -rf ../../../aliyun/apps/public/qixi2023/*
cp -r audio ../../../aliyun/apps/public/qixi2023
cp -r scripts ../../../aliyun/apps/public/qixi2023
cp -r styles ../../../aliyun/apps/public/qixi2023
cp -r images ../../../aliyun/apps/public/qixi2023
cp -r index.html ../../../aliyun/apps/public/qixi2023
cp -r index-nana.html ../../../aliyun/apps/public/qixi2023
cd ../../../aliyun/apps/public/qixi2023
git add .
git commit -a -m 'update'
git push -u origin master
