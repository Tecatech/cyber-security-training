FROM ubuntu:20.04
MAINTAINER Alexander Lodin "axlodin@yandex-team.ru"

ADD app/ /app
WORKDIR /app

RUN set -xe && \
    apt-get update && apt-get upgrade -y && \
    apt-get install -y gnupg2 curl && \
    (curl -sL https://deb.nodesource.com/setup_14.x | bash -) && \
    apt-get update && \
    apt-get install -y nginx-light nodejs supervisor && \
    npm install --production && \
    chown -R www-data /app/run &&\
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /root/.npm

COPY ./deploy/nginx /etc/nginx
COPY ./deploy/supervisor /etc/supervisor/conf.d
COPY ./deploy/scripts /scripts

HEALTHCHECK --interval=2s --retries=3 --timeout=3s CMD curl -f http://localhost/ping || exit 1

CMD supervisord -n -c /etc/supervisor/conf.d/supervisor.conf
