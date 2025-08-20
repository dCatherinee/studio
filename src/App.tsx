import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './useTheme';
import "./styles/index.scss";
import { classNames } from './classNames/classNames';



export const App = () => {
  const {theme, handleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleTheme}>Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainPageAsync />} />
            <Route path="/about" element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
    </div>
  )
}
