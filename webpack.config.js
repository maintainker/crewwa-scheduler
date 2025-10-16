import path from "path";

export default {
  mode: "development",
  target: "node16",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve("./dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"], // .ts 생략 가능
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true, // 타입 체크는 tsconfig에서만, 빌드는 Webpack
        },
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};
