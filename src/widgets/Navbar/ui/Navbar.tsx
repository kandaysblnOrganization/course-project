import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
	className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
	const {
		className,
	} = props;
	return (
		<div className={ classNames(classes.navbar, {}, [ className ]) }>
			<AppLink theme={ AppLinkTheme.INVERTED } to='/'>Главная</AppLink>
			<AppLink theme={ AppLinkTheme.INVERTED } to='/about'>О сайте</AppLink>
		</div>
	);
};