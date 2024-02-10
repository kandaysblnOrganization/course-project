import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import classes from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcherComponent: React.FC<ILangSwitcherProps> = (props) => {
    const {
        className,
        short,
    } = props;

    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ ButtonTheme.CLEAR }
            className={ classNames(classes.langSwitcher, {}, [ className ]) }
            onClick={ toggleLanguage }
        >
            { short ? t('language_short') : t('language') }
        </Button>
    );
};

export const LangSwitcher = React.memo( LangSwitcherComponent );
