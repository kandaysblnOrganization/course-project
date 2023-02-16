import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import classes from './Navbar.module.scss';

interface INavbarProps {
	className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
	const {
		className,
	} = props;
	return (
		<div className={ classNames(classes.navbar, {}, [ className ]) }>
			<ThemeSwitcher/>
			<nav className={ classNames(classes.navbarLinks) }>
				<AppLink theme={ AppLinkTheme.INVERTED } to='/'>Главная</AppLink>
				<AppLink theme={ AppLinkTheme.INVERTED } to='/about'>О сайте</AppLink>
			</nav>
		</div>
	);
};