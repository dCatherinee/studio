import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames/classNames';
import "./styles/index.scss";

export const App = () => {
  const {theme, handleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleTheme}>Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
    </div>
  )
}
