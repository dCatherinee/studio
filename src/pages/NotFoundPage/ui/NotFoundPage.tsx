import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = props => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <p className={classNames(cls.text)}>{t("pageNotFound")}</p>
      <Button
        theme={ThemeButton.USUAL}
        onClick={() => navigate(RoutePath[AppRoutes.MAIN])} // Ошибка в Storybook из-за роутов, потому что там тоже есть импорт этой страницы, Нужно от этого как-то избавится
        className={cls.btnWrap}
      >
        {t("returnToMain")}
      </Button>
    </div>
  );
};
