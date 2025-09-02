import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from "./ThemeSwitcher.module.scss";
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const {t, i18n} = useTranslation();
  const {handleTheme} = useTheme();

  return (
    <>
    <Button onClick={handleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>{t('theme')}</Button>
    </>
  )
}
