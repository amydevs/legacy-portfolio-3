@echo off
yarn build && yarn export && cd out && git init && git add -A && git commit -m 'deploy' && git push -f https://github.com/jy1263/amy-portfolio.git master:gh-pages && cd ..