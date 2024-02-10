import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
    className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props;

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
                {SidebarItemsList.map((sidebarItem) => (
                    <SidebarItem key={`sidebar-item-${sidebarItem.path}`} item={sidebarItem} collapsed={collapsed}/>
                ))}
            </nav>

            <div className={ classNames(classes.switchers, {}, []) }>
                <ThemeSwitcher/>
                <LangSwitcher short={ collapsed }/>
            </div>
        </div>
    );
};
