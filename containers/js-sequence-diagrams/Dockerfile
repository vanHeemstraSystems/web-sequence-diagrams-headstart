# Based on https://snyk.io/blog/10-best-parctices-to-containerize-nodejs-web-applications-with-docker 
FROM node:latest

# Install python3 from Docker Hub, if necessary
# COPY --from=faucet/python3 /usr/local/bin/python3 /usr/local/bin/python3

# Set environment to production
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Set registry
# Registry is also defined in .npmrc
RUN npm config set registry https://registry.npmjs.org/

# Set Strict SSL to False
RUN npm config set strict-ssl false

# Set unsafe perm to true, to allow for sqlite3 to be installed without errors
# See https://geedew.com/What-does-unsafe-perm-in-npm-actually-do/
RUN npm config set unsafe-perm true

# Update npm to the latest version
RUN npm install --global npm@latest

# Install bower
RUN npm install --global bower

# Install app bower dependencies
# When using COPY with more than one source file, the destination must be a directory and end with a /
COPY --chown=node:node bower.json /usr/src/app/
COPY --chown=node:node .bowerrc /usr/src/app/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# When using COPY with more than one source file, the destination must be a directory and end with a /
COPY --chown=node:node package*.json /usr/src/app/

# Make sure you have set SELinux from Enforcing to Permissive, otherwise npm install will fail.
# $ sudo setenforce 0
# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Install and build SQLite3 from source, as behind a corporate firewall downloading incompatibility-fixing binaries is blocked
# RUN npm uninstall node-pre-gyp --save
# RUN npm install @mapbox/node-pre-gyp --save
# RUN npm install sqlite3 --build-from-source --save

# Bundle app source
# When using COPY with more than one source file, the destination must be a directory and end with a /
COPY --chown=node:node . /usr/src/app/

# Install sqlite3 from script, due to issue reported at https://forum.snapcraft.io/t/npm-install-fails-with-sqlite3-5-0-0-in-dependencies/21369
# RUN ./install_sqlite3.sh

# Change owner
USER node

CMD [ "node", "server.js" ]

EXPOSE 8080
