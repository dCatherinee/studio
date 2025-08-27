import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/RouterProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import "./styles/index.scss";
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const {theme, handleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
