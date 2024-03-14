import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/svg/home-black-20x20.svg';
import AboutIcon from 'shared/assets/icons/svg/about-black-20x20.svg';
import ProfileIcon from 'shared/assets/icons/svg/profile-black-20x20.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        icon: MainIcon,
        text: 'main_navbar',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'about_navbar',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'profile_navbar',
        authOnly: true,
    },
];
