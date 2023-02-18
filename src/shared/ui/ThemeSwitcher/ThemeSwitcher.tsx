import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/svg/theme-light.svg';
import DarkIcon from 'shared/assets/icons/svg/theme-dark.svg';

interface IThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = (props) => {
    const {
        className,
    } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={ classNames(classes.themeSwitcher, {}, [ className ]) }
            onClick={ toggleTheme }
        >
            { theme === Theme.DARK
                ? <DarkIcon/>
                : <LightIcon/>
            }
        </Button>
    );
};