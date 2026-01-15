import webpack from "webpack";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const webpackFinal: StorybookConfig["webpackFinal"] = async config => {
  // const isDev = process.env.NODE_ENV !== 'production';
  const isDev = true;

  // Добавляем правило для обработки SCSS файлов
  config.module!.rules!.push({
    test: /\.s[ac]ss$/i,
    use: [
      // В Storybook используем style-loader для hot reload
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
            namedExport: false,
          },
          importLoaders: 1,
        },
      },
      // Компиляция Sass в CSS
      {
        loader: "sass-loader",
        options: {
          // Настройки sass-loader если нужны
          sassOptions: {
            includePaths: [path.resolve(__dirname, "../src/app/styles")],
          },
        },
      },
    ],
  });

  // Добавляем правило для TypeScript
  config.module!.rules!.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: "tsconfig.json",
        },
      },
    ],
  });

  // Настройка resolve для TypeScript
  config.resolve ??= {};
  config.resolve.extensions ??= [];
  config.resolve.extensions.push(".ts", ".tsx");

  // Добавляем алиасы если они используются в проекте
  config.resolve ??= {};
  config.resolve.alias ??= {};

  // Добавление алиасов
  config.resolve.alias = {
    ...config.resolve.alias,
    shared: path.resolve(__dirname, "../src/shared"),
    entities: path.resolve(__dirname, "../src/entities"),
    features: path.resolve(__dirname, "../src/features"),
    widgets: path.resolve(__dirname, "../src/widgets"),
    pages: path.resolve(__dirname, "../src/pages"),
    app: path.resolve(__dirname, "../src/app"),
  };

  // Добавляем плагины если нужно
  config.plugins ??= [];

  // DefinePlugin для переменных окружения
  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  );

  // Если нужен MiniCssExtractPlugin в продакшене
  // if (!isDev) {
  //   config.plugins?.push(
  //     new MiniCssExtractPlugin({
  //       filename: "[name].[contenthash:8].css",
  //       chunkFilename: "[name].[contenthash:8].css",
  //     })
  //   );
  // }

  return config;
};
