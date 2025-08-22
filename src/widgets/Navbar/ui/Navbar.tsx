import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from "./Navbar.module.scss"

export const Navbar = () => {
  return (
    <div className={classNames(cls.wrapper)}>
      <div className={classNames(cls.linksBox)}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  )
}
