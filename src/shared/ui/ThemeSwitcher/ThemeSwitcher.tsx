import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/svg/theme-light.svg';
import DarkIcon from 'shared/assets/icons/svg/theme-dark.svg';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcherComponent: React.FC<IThemeSwitcherProps> = (props) => {
    const {
        className,
    } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={ classNames(classes.themeSwitcher, {}, [ className ]) }
            theme={ ButtonTheme.CLEAR }
            onClick={ toggleTheme }
        >
            { theme === Theme.DARK
                ? <DarkIcon/>
                : <LightIcon/>
            }
        </Button>
    );
};

export const ThemeSwitcher = React.memo( ThemeSwitcherComponent );
