import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.wrapper)}>
      <div className={classNames(cls.linksBox)}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          {t("main")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          {t("about")}
        </AppLink>
      </div>
    </div>
  );
};
