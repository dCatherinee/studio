import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/, // регулярное выражение для поиска конкретных файлов, которые обработаются этим лоудером
    use: 'ts-loader', // название лоудера
    exclude: /node_modules/, // здесь можно исключить места, где не нужно искать файлы
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)&/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        "plugins": [
          ["i18next-extract", {
            locales: ["ru", "en"],
            keyAsDefaultValue: true,
          }],
        ]
      }
    }
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            namedExport: false,
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}