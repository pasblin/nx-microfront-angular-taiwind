FROM node:latest as node
WORKDIR /app
COPY . .


RUN npm install -g @nrwl/cli
RUN npm install --force
RUN npx nx run-many -t build -p root login dashboard app-one app-two --configuration=production --skip-nx-cache

#stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node app/dist/apps/root /usr/share/nginx/html/root
COPY --from=node app/dist/apps/login /usr/share/nginx/html/login
COPY --from=node app/dist/apps/dashboard /usr/share/nginx/html/dashboard
COPY --from=node app/dist/apps/app-one /usr/share/nginx/html/app-one
COPY --from=node app/dist/apps/app-two /usr/share/nginx/html/app-two

EXPOSE 80 4201 4202 4203 4204
