import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader: React.FC<ILoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ classNames(classes.ldsEllipsis, {}, [ className ]) }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};