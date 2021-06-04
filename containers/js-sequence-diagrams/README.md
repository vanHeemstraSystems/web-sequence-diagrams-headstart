README.md

# js-sequence-diagrams

Based on "Dockerizing a Node.js web app" at https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

Based on "Build a REST API with Node.js SQLite and Express JS" at https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

## Prerequisites

- [Docker Engine](https://github.com/vanHeemstraSystems/docker-quick-start-headstart) & [docker-compose](https://github.com/vanHeemstraSystems/docker-compose-quick-start-headstart)
- [Git Client](https://github.com/vanHeemstraSystems/how-to-install-git-on-centos-7)

- SELinux, set security from Enforcing to Permissive (otherwise Dockerfile will error on permissions). See https://nanxiao.me/en/selinux-cause-permission-denied-issue-in-using-docker/

```
$ getenforce
Enforcing
$ sudo setenforce 0
$ getenforce
Permissive
```
- Having a ```package-lock.json``` file in the root of your nodejs app (here: containers/js-sequence-diagrams/package-lock.json)

***Note***: to create such a ```package-lock.json``` file, run ```npm install``` in the root directory and the file will be automatically generated. Make sure to commit this file to your source code repository (here: Github).

- SQLite3 version 5.0.2 and newer requires the following changes: 

```
$ npm uninstall node-pre-gyp --save
$ npm install @mapbox/node-pre-gyp --save
```

Instead we make use of ***better-sqlite3*** to prevent above requirement, taken care of in ```package.json``` and ```package-lock.json```.
See https://www.npmjs.com/package/better-sqlite3

```
$ npm install better-sqlite3 --save
```

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

## Configure NPM for Artifactory (Optional)

See if you can connect to Artifactory

```
$ ping mydepartment-artifactory.mycompany.com
```

If successful, continue:

```
$ curl -l -k -v https://mydepartment-artifactory.mycompany.com/artifactory/api/system/ping
```

If successful (i.e. HTTP/1.1 200 OK), continue:

```
# setting the default registry to Artifactory
$ npm config set registry https://mydepartment-artifactory.mycompany.com/artifactory/api/npm/npm/
# log in
$ npm login
```

Next you should create a ```.npmrc``` file with values retrieved directly from Artifactory:

Here: for USER use your company account name and for PASSWORD use your company account password.

```
$ curl -u <USER>:<PASSWORD> https://mydepartment-artifactory.mycompany.com/artifactory/api/npm/auth
```

You will be prompted as follows:

```
_auth = <A_LONG_HASH_STRING_OF_CHARACTERS>
always-auth = true
email = willem.van.heemstra@mycompany.com
```

Note: the email depends on which ```<USER>``` you entered.

Now save the following in a file called .npmrc next to package.json:

```
_auth = <A_LONG_HASH_STRING_OF_CHARACTERS>
always-auth = true
email = willem.van.heemstra@mycompany.com
registry = https://mydepartment-artifactory.mycompany.com/artifactory/api/npm/npm/
https-proxy = http://service-account-artifactory-apps:[64 BIT ENCODED PASSWORD]@myproxy.mycompany.com:8080/
proxy = http://service-account-artifactory-apps:[64 BIT ENCODED PASSWORD]@myproxy.mycompany.com:8080/
strict-ssl = false
```
/containers/js-sequence-diagrams/.npmrc

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
CONTAINER ID        IMAGE                                       COMMAND                  CREATED             STATUS              PORTS                     NAMES
1cb6cfbe5804        js-sequence-diagrams_js-sequence-diagrams   "docker-entrypoint.s…"   21 seconds ago      Up 15 seconds       0.0.0.0:49160->8080/tcp   js-sequence-diagrams
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
