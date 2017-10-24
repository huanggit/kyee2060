#mongo
docker run -dit --name mon  -v $PWD/db/:/data/db/ mongo
#java
sshpass -p 'kyeegroup@ksp#' scp -P 15312 target/open-platform-1.1.0.jar ksplatform@139.129.219.176:~/back
docker run -dit --name back -p 8888:8888 -v $PWD/../front/img/:/app/img/ -v $PWD/:/app/ -w /app --link mon:mongo java:8 java -jar open-platform-*.jar
#nginx
docker run --name ngx -p 80:80 -v $PWD/:/usr/share/nginx/html:ro -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro -dit nginx
docker exec -i -t nginx /bin/bash
