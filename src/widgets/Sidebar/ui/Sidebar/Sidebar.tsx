import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/svg/home-black-20x20.svg';
import AboutIcon from 'shared/assets/icons/svg/about-black-20x20.svg';
import classes from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props;

    const { t } = useTranslation();
    const [ collapsed, setCollapsed ] = React.useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar-testId"
            className={
                classNames(classes.sidebar, {
                    [classes.collapsed]: collapsed,
                }, [ className ])
            }

            { ...otherProps }
        >
            <Button
                data-testid="sidebar-toggle-btn-testId"
                className={ classes.collapseBtn }
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                square={ true }
                size={ ButtonSize.L }
                onClick={ onToggle }
            >
                { collapsed ? '>' : '<' }
            </Button>

            <nav className={ classNames(classes.sidebarNavLinks) }>
                <AppLink
                    className={ classes.sidebarNavLink }
                    theme={ AppLinkTheme.INVERTED_PRIMARY }
                    to={ RoutePath.main }
                >
                    <MainIcon className={ classes.icon }/>
                    { !collapsed && (
                        <span>
                            { t('main_navbar') }
                        </span>
                    ) }
                </AppLink>
                <AppLink
                    className={ classes.sidebarNavLink }
                    theme={ AppLinkTheme.INVERTED_PRIMARY }
                    to={ RoutePath.about }
                >
                    <AboutIcon className={ classes.icon }/>
                    { !collapsed && (
                        <span>
                            { t('about_navbar') }
                        </span>
                    ) }
                </AppLink>
            </nav>

            <div className={ classNames(classes.switchers, {}, []) }>
                <ThemeSwitcher/>
                <LangSwitcher short={ collapsed }/>
            </div>
        </div>
    );
};
