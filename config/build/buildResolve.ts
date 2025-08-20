import webpack from "webpack";

export function buildResolve(): webpack.ResolveOptions {
  return { 
    extensions: ['.tsx', '.ts', '.js'], // указываются расширения файлов, для которых при импорте не нужно указывать расширение
  };
}