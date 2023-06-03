import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={ classNames(classes.pageLoader, {}, [ className ]) }>
            <Loader/>
        </div>
    );
};
