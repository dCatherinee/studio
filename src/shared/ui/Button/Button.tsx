import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  USUAL = "usual",
  OUTLINE = "outline",
  TEXT = "text",
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButton> = ({
  children,
  className,
  theme = ThemeButton.USUAL,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.btn, {}, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
