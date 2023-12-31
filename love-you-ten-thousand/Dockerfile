FROM node:18

RUN npm config set registry https://registry.npm.taobao.org
WORKDIR /nana/love
COPY ./ /nana/love
# RUN npm install && npm run build
RUN yarn install && yarn build

FROM nginx:alpine
RUN mkdir -p /nana/love
COPY --from=0 /nana/love/dist /nana/love
# COPY --from=0 /nana/love/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
