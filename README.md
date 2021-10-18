# node-login
우리밋_woorimIT 백엔드 맛보기 강의 따라하기

## install package
```sh
npm install {package name} --save #save info to package.json 
```

### dependency packages
express
ejs
body-parser # 더 이상 지원 안함 -> express에 내장되어 있음

## make package.json
```sh
npm init {-y}
```



## run

### use node
```sh
  "scripts": {
    "start": "node ./bin/www.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```sh
node ./bin/www.js
npm start
```
### use nodemon 
```sh
  "scripts": {
    "start": "nodemon ./bin/www.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```sh
npm install nodemon -g
nodemon ./bin/www.js
```

### run start after git clone 
```sh
git clone https://github.com/khsunkh/node-login
cd ./node-login/app
npm install #install node_modules from package*.json
```

##
front 오픈소스 사이트
```
Bootstrap
Material UI
semantic UI
codepen
```