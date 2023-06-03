import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [ isAuthModal, setIsAuthModal ] = React.useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout());
    }, [ dispatch ]);

    if (authData) {
        return (
            <div className={ classNames(classes.navbar, {}, [ className ]) }>
                <Button theme={ ButtonTheme.CLEAR_INVERTED } onClick={ onLogout }>
                    { t('logout') }
                </Button>
            </div>
        );
    }

    return (
        <div className={ classNames(classes.navbar, {}, [ className ]) }>
            <Button theme={ ButtonTheme.CLEAR_INVERTED } onClick={ onShowModal }>
                { t('login') }
            </Button>
            { isAuthModal && <LoginModal
                isOpen={ isAuthModal }
                onClose={ onCloseModal }
            /> }
        </div>
    );
};
