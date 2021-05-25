README.md

# js-sequence-diagrams

Based on "Dockerizing a Node.js web app" at https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Prerequisites

- [Docker Engine](https://github.com/vanHeemstraSystems/docker-quick-start-headstart) & [docker-compose](https://github.com/vanHeemstraSystems/docker-compose-quick-start-headstart)
- [Git Client](https://github.com/vanHeemstraSystems/how-to-install-git-on-centos-7)

## Building your image

Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

```
$ cd containers/js-sequence-diagrams
$ docker build . -t js-sequence-diagrams
```

Your image will now be listed by Docker:

```
$ cd containers/js-sequence-diagrams
$ docker images

# Example
REPOSITORY             TAG                 IMAGE ID            CREATED             SIZE
js-sequence-diagrams   latest              4087308536df        7 minutes ago       947MB
node                   14                  9153ee3e2ced        12 days ago         943MB
```

## Run the image

Copy the sample.docker-compose.yml file to docker-compose.yml (unless you want to keep a previously amended docker-compose.yml file):

```
$ cd containers/js-sequence-diagrams
$ cp sample.docker-compose.yml docker-compose.yml
```

Running your image with ```-d``` runs the container in detached mode, leaving the container running in the background.

Run the image you previously built:

```
$ cd containers/js-sequence-diagrams
$ docker-compose up -d
```

## Print the output of your app:

```
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080
```

If you need to go inside the container you can use the ```exec``` command:

```
# Enter the container
$ docker exec -it <container id> /bin/bash
```

## Test

To test your app, get the port of your app that Docker mapped:

```
$ docker ps

# Example
ID            IMAGE                                                COMMAND    ...   PORTS
ecce33b30ebf  <your artifactory path>/js-sequence-diagrams:latest  npm start  ...   49160->8080
```

In the example above, Docker mapped the 8080 port inside of the container to the port 49160 on your machine.

Now you can call your app using ```curl``` (install if needed via: ```sudo apt-get install curl```):

```
$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Mon, 13 Nov 2017 20:53:59 GMT
Connection: keep-alive

Hello world
```

You can find more information about Docker and Node.js on Docker in the following places:

- [Official Node.js Docker Image](https://hub.docker.com/_/node/)
- [Node.js Docker Best Practices Guide](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
- [Official Docker documentation](https://docs.docker.com/get-started/nodejs/build-images/)
- [Docker Tag on Stack Overflow](https://stackoverflow.com/questions/tagged/docker)
- [Docker Subreddit](https://reddit.com/r/docker)
