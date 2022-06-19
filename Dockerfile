FROM ruby:2.7

ENV RAILS_ENV=production

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update -qq \
    && apt-get install -y nodejs yarn
WORKDIR /app
COPY ./src /app/
RUN bundle config --local set path 'vendor/bundle' \
    && bundle install
RUN source ~/.bash_profile && rm Gemfile.lock && gem install bundler -v 1.17.3 && bundler _1.17.3_ install

COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh", "/start.sh"]