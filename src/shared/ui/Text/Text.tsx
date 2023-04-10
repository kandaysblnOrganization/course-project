import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

interface ITextProps {
    className?: string;
    text?: string;
    title?: string;
}

export const Text: React.FC<ITextProps> = (props) => {
    const {
        className,
        text,
        title
    } = props;
    return (
        <div className={ classNames(classes.textWrapper, {}, [ className ]) }>
            { title && <p className={ classes.title }>{ title }</p> }
            { text && <p className={ classes.text }>{ text }</p> }
        </div>
    );
};