// 웹팩 설치
// npm install --save-dev webpack webpack-cli
// 바벨 설치
// npm install babel-loader @babel/core --save-dev
// 바벨 프리셋 지정
// npm @babel/preset-env @babel/preset-react --save-dev
// .babelrc 생성
// 웹펙 실행
// npx webpack --mode development
// => package.json 파일에 간편 실행 추가 => npm run build
// 디버깅을 위한 소스맵

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js",
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    devtool: "source-map"
};