import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry, // стартовая точка нашего приложения
    output: { // место, в котором будет лежать наша сборка
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true, // отчищает папку со сборкой перед новой сборкой
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options), // конфигурация лоадеров (они помогают обрабатывать файлы, которые не javascript)
    },
    resolve: buildResolve(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}