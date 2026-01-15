import type { StorybookConfig } from "@storybook/react-webpack5";
import { webpackFinal } from "./webpack.config.ts";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-styling-webpack",
  ],
  webpackFinal: webpackFinal,
};

export default config;
