import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/RouterProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import "./styles/index.scss";

export const App = () => {
  const {theme, handleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleTheme}>Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  )
}
