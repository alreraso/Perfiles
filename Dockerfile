FROM node:12

# Create app directory
WORKDIR ./

# Install app dependencies
COPY package.json .
RUN npm install -y 

# Bundle app source
COPY . .

ARG URL=0.0.0.0:5002

EXPOSE 5002

CMD [ "npm", "run", "dev" ]
