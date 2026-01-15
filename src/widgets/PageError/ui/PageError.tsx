import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Button } from "../../../shared/ui/Button/Button";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = props => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const handleReload = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <p className={classNames(cls.text)}>{t("something-went-wrong")}</p>
      <Button onClick={handleReload}>{t("reload")}</Button>
    </div>
  );
};
