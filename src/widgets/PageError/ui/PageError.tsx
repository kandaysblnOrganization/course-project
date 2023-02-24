import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface IPageErrorProps {
    className?: string;
}

export const PageError: React.FC<IPageErrorProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={ classNames( classes.pageError, {}, [ className ] ) }>
            <p>{ t( 'page_error_message' ) }</p>
            <Button theme={ ButtonTheme.OUTLINED } onClick={ reloadPage }>
                { t( 'page_reload_text' ) }
            </Button>
        </div>
    );
};