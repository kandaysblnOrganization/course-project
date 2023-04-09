import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={ classNames(classes.loginForm, {}, [ className ]) }>
            <Input
                autofocus
                label={ t('username') }
                type="text"
            />
            <Input label={ t('userpass') } type="password"/>
            <Button theme={ ButtonTheme.BACKGROUND_INVERTED }>
                { t('login') }
            </Button>
        </div>
    );
};