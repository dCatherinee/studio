import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const {t, i18n} = useTranslation();

  const handleChangeLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }
 
  return (
      <Button theme={ThemeButton.TEXT} onClick={handleChangeLang} className={classNames(cls.wrapper, {}, [className])}>
        {t('lang')}
      </Button>
  )
}
