import React, { useMemo } from 'react';
import classes from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ISidebarItem } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface ISidebarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

const SidebarItemComponent: React.FC<ISidebarItemProps> = (props) => {
    const {
        item,
        collapsed
    } = props;
    const { t } = useTranslation();
    const isAuth = useSelector( getUserAuthData );

    const IconComponent = useMemo(() => {
        return item.icon;
    }, [item]);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={ classes.sidebarNavLink }
            theme={ AppLinkTheme.INVERTED_PRIMARY }
            to={ item.path }
        >
            <IconComponent className={ classes.icon }/>
            { !collapsed && (
                <span>
                    { t(item.text) }
                </span>
            ) }
        </AppLink>
    );
};

export const SidebarItem = React.memo( SidebarItemComponent );
