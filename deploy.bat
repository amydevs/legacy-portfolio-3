@echo off
yarn build && cd dist && git init && git add -A && git commit -m 'deploy' && git push -f https://github.com/jy1263/amy-portfolio.git master:gh-pages && cd ..