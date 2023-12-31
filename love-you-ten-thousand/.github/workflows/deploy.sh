#deploy.sh
docker login -u songtang_marine -p 'slfGuadalcanal99.' registry.cn-beijing.aliyuncs.com
docker pull registry.cn-beijing.aliyuncs.com/songtang/love:latest
docker stop love
docker rm love
docker run --name love -d -p 80:80 registry.cn-beijing.aliyuncs.com/songtang/love
docker image prune -f
docker container prune -f
