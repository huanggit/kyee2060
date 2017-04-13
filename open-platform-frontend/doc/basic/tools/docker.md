
basic
```
docker search
docker pull
docker images / rmi
docker ps -a / rm
docker start / stop /restart
```
run
```
docker run --name ngx -p 80:80 -v $PWD/:/usr/share/nginx/html:ro -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro -dit nginx
```
ssh bash a docker
```
docker exec -i -t nginx /bin/bash
```

