import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/RouterProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import "./styles/index.scss";

export const App = () => {
  const {theme, handleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
