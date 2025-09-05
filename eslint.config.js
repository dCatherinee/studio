import js from "@eslint/js";
import globals from "globals";
import { parser as tsParser } from "typescript-eslint";
import { configs as tsConfigs } from "typescript-eslint";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginI18n from "eslint-plugin-i18n-json";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        __IS_DEV__: "readonly",
        __dirname: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        // project: "./tsconfig.json",
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "i18n-json": pluginI18n,
      prettier,
      "@typescript-eslint": tsPlugin,
    },
    settings: {
      react: {
        version: "detect", // Автоопределение версии React
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsConfigs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "warn", // Интеграция Prettier
      "no-unused-vars": "off", // Отключаем базовое правило, используем TypeScript-версию
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Игнорируем переменные с подчёркиванием
      "react/jsx-indent": ["warn", 2], // Индентация 2 пробела для JSX
      "react/prop-types": "off", // Отключаем prop-types, так как используем TypeScript
      "i18n-json/identical-keys": "warn", // Проверка одинаковых ключей в i18n
      // "i18n-json/no-duplicate-keys": "error", // Запрет дублирования ключей в переводах
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.json"],
    plugins: {
      "i18n-json": pluginI18n,
    },
    rules: {
      "i18n-json/valid-json": "error", // Проверка валидности JSON для i18n
    },
  },
  {
    ignores: ["dist/**", "build/**", "node_modules/**"], // Игнорируем папки
  },
]);
