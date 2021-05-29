# Based on https://snyk.io/blog/10-best-parctices-to-containerize-nodejs-web-applications-with-docker 
FROM node:16

# Set environment to production
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Set registry
# Registry is also defined in .npmrc
RUN npm config set registry https://registry.npmjs.org/

# Set Strict SSL to False
RUN npm config set strict-ssl false

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

# Bundle app source
# When using COPY with more than one source file, the destination must be a directory and end with a /
COPY --chown=node:node . /usr/src/app/

# Change owner
USER node

CMD [ "node", "server.js" ]

EXPOSE 8080
