import React from 'react';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { AppRouter } from "app/providers/router";

export const App = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={ classNames('wrapper', {}, [ theme ]) }>
			<button
				onClick={ toggleTheme }
			>
				{ theme === Theme.DARK ? 'Светлая тема' : 'Темная тема' }
			</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>

			<AppRouter/>
		</div>
	);
};