import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import './styles/index.scss';

export const App = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={ `wrapper ${ theme }` }>
			<button
				onClick={ toggleTheme }
			>
				{ theme === Theme.DARK ? 'Светлая тема' : 'Темная тема' }
			</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path='/' element={ <MainPageAsync/> }/>
					<Route path='/about' element={ <AboutPageAsync/> }/>
				</Routes>
			</Suspense>
		</div>
	);
};