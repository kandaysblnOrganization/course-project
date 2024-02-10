import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ILoginFormProps {
    className?: string;
    onSuccess: () => void
}

const LoginForm = React.memo( (props: ILoginFormProps) => {
    const {
        className,
        onSuccess
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector( getLoginUsername );
    const password = useSelector( getLoginPassword );
    const error = useSelector( getLoginError );
    const isLoading = useSelector( getLoginIsLoading );

    const initialReducers = React.useMemo<ReducersList>( () => {
        return {
            loginForm: loginReducer,
        };
    }, [] );

    const onChangeUsername = React.useCallback( (value: string) => {
        dispatch( loginActions.setUsername( value ) );
    }, [ dispatch ] );

    const onChangePassword = React.useCallback( (value: string) => {
        dispatch( loginActions.setPassword( value ) );
    }, [ dispatch ] );

    const onClickLogin = React.useCallback( async () => {
        const result = await dispatch( loginByUsername( { username, password } ) );

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }

    }, [dispatch, onSuccess, password, username] );

    return (
        <DynamicModuleLoader
            reducers={ initialReducers }
            removeAfterUnmount={ true }
        >
            <div className={ classNames( classes.loginForm, {}, [ className ] ) }>
                <Text
                    title={ t( 'login_form_title' ) }
                />
                {
                    error && <Text
                        title={ t( 'authorization_error_title' ) }
                        text={ t( 'authorization_error_text' ) }
                        theme='error'
                    />
                }
                <Input
                    autofocus
                    value={ username }
                    label={ t( 'username' ) }
                    type="text"
                    onChange={ onChangeUsername }
                />
                <Input
                    value={ password }
                    label={ t( 'userpass' ) }
                    type="password"
                    onChange={ onChangePassword }
                />
                <Button
                    theme={ ButtonTheme.BACKGROUND_INVERTED }
                    disabled={ isLoading }
                    onClick={ onClickLogin }
                >
                    { t( 'login' ) }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
} );

export default LoginForm;
