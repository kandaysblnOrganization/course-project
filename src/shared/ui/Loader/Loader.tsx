import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

const LoaderComponent: React.FC<ILoaderProps> = (props) => {
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

export const Loader = React.memo( LoaderComponent );
