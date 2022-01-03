FROM ruby:3.0.3-alpine

RUN apk update && \
    apk upgrade && \
    apk add --no-cache linux-headers libxml2-dev make gcc libc-dev nodejs tzdata postgresql-dev postgresql && \
    apk add --virtual build-packages --no-cache build-base curl-dev

WORKDIR /app

COPY Gemfile* ./
RUN bundle install
RUN apk del build-packages
COPY . .

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
