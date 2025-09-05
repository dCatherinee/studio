import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import iconLight from "../../../shared/assets/icons/studio-theme-icon-light.png";
import iconDark from "../../../shared/assets/icons/studio-theme-icon-dark.png";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const { theme, handleTheme } = useTheme();

  return (
    <>
      <Button
        onClick={handleTheme}
        className={classNames(cls.themeSwitcher, {}, [className])}
      >
        <img
          src={theme === Theme.LIGHT ? iconLight : iconDark}
          className={classNames(cls.iconTheme, {}, [])}
          alt={theme === Theme.LIGHT ? t("themeLight") : t("themeDark")}
        />
      </Button>
    </>
  );
};
