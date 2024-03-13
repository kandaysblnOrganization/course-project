import React, { CSSProperties, ImgHTMLAttributes, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    size?: number;
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
    const {
        className,
        size,
        ...otherProps
    } = props;

    const styles = useMemo<CSSProperties>( () => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [ size ] );

    return (
        <img style={ styles } alt={otherProps.alt} className={ classNames( classes.avatar, {}, [ className ] ) } { ...otherProps }/>
    );
};
