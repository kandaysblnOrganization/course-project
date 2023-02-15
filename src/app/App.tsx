import React from 'react';
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={ classNames('wrapper', {}, [ theme ]) }>
			<Navbar/>
			<button
				onClick={ toggleTheme }
			>
				{ theme === Theme.DARK ? 'Светлая тема' : 'Темная тема' }
			</button>
			<AppRouter/>
		</div>
	);
};