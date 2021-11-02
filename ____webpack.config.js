// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const fs  = require('fs');
const isProduction = process.env.NODE_ENV == "production";
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));
const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    ['import', { libraryName: "antd", style: true }],
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: [],
          plugins: [
          ],
        },
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader",
            options: {
              modifyVars: themeVariables
            }
          }
        ]
      }
    ]
  },
  // webpack1.config.js
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel', 
        query: {
          plugins: [
            ['import', { libraryName: "antd", style: true }]
          ]
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        query: {
          modifyVars: themeVariables
        }
      },
    ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.less$/i,
  //       use: [
  //         "style-loader",
  //         {
  //           loader: "css-loader",
  //           options: {
  //             sourceMap: true,
  //           },
  //         },
  //         {
  //           loader: "less-loader",
  //           options: {
  //             // If you are using less-loader@5 please spread the lessOptions to options directly
  //             modifyVars: {
  //               "primary-color": "#49d9be",
  //               "link-color": "#49d9be",
  //               "border-radius-base": "4px",
  //               "layout-body-background": "@border-color-base",
  //             },
  //             javascriptEnabled: true,
  //             sourceMap: true,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
