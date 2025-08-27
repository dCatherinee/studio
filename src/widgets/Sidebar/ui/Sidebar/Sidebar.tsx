import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleChangeCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.wrapper, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={handleChangeCollapsed}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
