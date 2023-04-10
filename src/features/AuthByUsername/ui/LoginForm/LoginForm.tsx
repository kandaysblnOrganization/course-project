import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = React.memo((props: ILoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error
    } = useSelector(getLoginState);

    const onChangeUsername = React.useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [ dispatch ]);

    const onChangePassword = React.useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [ dispatch ]);

    const onClickLogin = React.useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [ dispatch, password, username ]);

    return (
        <div className={ classNames(classes.loginForm, {}, [ className ]) }>
            {
                error && <div>{ error }</div>
            }
            <Input
                autofocus
                value={ username }
                label={ t('username') }
                type="text"
                onChange={ onChangeUsername }
            />
            <Input
                value={ password }
                label={ t('userpass') }
                type="password"
                onChange={ onChangePassword }
            />
            <Button
                theme={ ButtonTheme.BACKGROUND_INVERTED }
                disabled={ isLoading }
                onClick={ onClickLogin }
            >
                { t('login') }
            </Button>
        </div>
    );
});