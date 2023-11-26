FROM node:latest

EXPOSE 3000
EXPOSE 8080
EXPOSE 3306

WORKDIR /app

RUN npm install -g create-react-app

CMD ["/bin/bash"]
