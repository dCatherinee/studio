declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.pdf";
declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __AUTH_API_URL__: string;
