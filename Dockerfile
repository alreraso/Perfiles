FROM node:12

# Create app directory
WORKDIR ./

# Install app dependencies
COPY package.json .
RUN npm install -y 
RUN npm i @types/express @types/morgan @types/cors promise-mysql@3.3.1 typescript
RUN tsc

# Bundle app source
COPY . .

ARG URL=0.0.0.0:5002

EXPOSE 5002

CMD [ "npm", "run", "dev" ]
