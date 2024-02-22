import ESLintPlugin from "eslint-webpack-plugin";

export const output = {
  path: path.resolve(__dirname, "./dist"),
  filename: "[name].bundle.js",
  plugins,
};
export const plugins = [new ESLintPlugin()];
