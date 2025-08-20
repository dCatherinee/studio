import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolve(options: BuildOptions): webpack.ResolveOptions {
  return { 
    extensions: ['.tsx', '.ts', '.js'], // указываются расширения файлов, для которых при импорте не нужно указывать расширение
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}