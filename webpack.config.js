import path from "path";

export default {
  mode: "development", // 개발용. 배포용은 'production'
  target: "node16", // Node16+ ESM 환경
  entry: "./src/index.ts", // 기존 파일 그대로
  output: {
    filename: "index.js",
    path: path.resolve("./dist"), // dist 폴더로 번들링
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"], // import에서 .ts 확장자 사용 가능
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    topLevelAwait: true, // 최상위 await 허용
  },
};
