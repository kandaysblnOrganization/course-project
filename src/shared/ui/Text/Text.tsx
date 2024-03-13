import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'center' | 'left' | 'right';

interface ITextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

const TextComponent: React.FC<ITextProps> = (props) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left'
    } = props;

    return (
        <div className={ classNames( classes.textWrapper, {}, [ classes[theme], classes[align], className ] ) }>
            { title && <p className={ classes.title }>{ title }</p> }
            { text && <p className={ classes.text }>{ text }</p> }
        </div>
    );
};

export const Text = React.memo( TextComponent );
