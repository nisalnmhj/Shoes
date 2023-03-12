FROM node:16
# Create app directory
ENV PORT=8080
ENV MONGO_USER=user
ENV MONGO_PASS=pass
WORKDIR /app
## Install all dependencies from package.json and package-lock.json
COPY package*.json .
RUN npm install
#Bundle app Source
COPY . .
#Your app binds to port 8080 so you'll use the EXPOSE 
#instruction to have it mapped by the docker daemon:
EXPOSE 8080
CMD [ "npm","start" ]