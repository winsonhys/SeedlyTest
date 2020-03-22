const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackModuleRule
} = require("customize-cra");

const getModulePath = module => path.resolve(__dirname, "src", module);

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addWebpackModuleRule({
    test: /\.gql$/,
    exclude: /node_modules/,
    loader: "graphql-tag/loader"
  }),
  addWebpackModuleRule({
    test: /\.less$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      {
        loader: "css-loader" // translates CSS into CommonJS
      },
      {
        loader: "less-loader", // compiles Less to CSS
        options: {
          modifyVars: {
            "brand-primary": "#e66673"
          },
          javascriptEnabled: true,
          include: /node_modules/
        }
      }
    ]
  })
);
