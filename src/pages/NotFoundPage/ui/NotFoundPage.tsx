import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation('not_found_page');
    return (
        <div className={ classNames(classes.notFoundPage, {}, [ className ]) }>
            { t('not_found_page') }
        </div>
    );
};