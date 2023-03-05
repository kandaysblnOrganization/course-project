import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
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

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props;

    const mods: Record<string, boolean | string> = {
        [classes.square]: square,
    };

    return (
        <button
            className={ classNames( classes.button, mods, [ classes[size], classes[theme], className ] ) }
            { ...otherProps }
        >
            { children }
        </button>
    );
};