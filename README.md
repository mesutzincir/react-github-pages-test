## Welcome github pages test

create-react-app react-github-pages-test

cd react-github-pages-test

git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/mesutzincir/react-github-pages-test.git  

git push -u origin master       

npm install --save gh-pages 

add "homepage":"https://mesutzincir.github.io/react-github-pages-test/" below name in package.json

add "predeploy":"npm run build" scripts section in package.json

add "deploy":"gh-pages -d build" scripts section in package.json

npm run deploy