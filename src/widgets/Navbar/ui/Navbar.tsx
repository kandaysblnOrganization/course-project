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

        </div>
    );
};