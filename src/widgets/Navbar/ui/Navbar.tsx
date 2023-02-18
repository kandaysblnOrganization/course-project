import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={ classNames(classes.navbar, {}, [ className ]) }>
            <nav className={ classNames(classes.navbarLinks) }>
                <AppLink theme={ AppLinkTheme.INVERTED } to='/'>{ t('main_navbar') }</AppLink>
                <AppLink theme={ AppLinkTheme.INVERTED } to='/about'>{ t('about_navbar') }</AppLink>
            </nav>
        </div>
    );
};