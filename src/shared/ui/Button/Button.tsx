import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_INVERTED = 'outlinedInverted',
    OUTLINED_ERROR = 'outlinedError',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
}

const ButtonComponent: React.FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINED,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props;

    const mods: Mods = {
        [classes.square]: square,
    };

    return (
        <button
            className={ classNames(classes.button, mods, [ classes[size], classes[theme], className ]) }
            { ...otherProps }
        >
            { children }
        </button>
    );
};

export const Button = ButtonComponent;
