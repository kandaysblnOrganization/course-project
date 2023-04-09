import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [ isAuthModal, setIsAuthModal ] = React.useState<boolean>(false);

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={ classNames(classes.navbar, {}, [ className ]) }>
            <Button theme={ ButtonTheme.CLEAR_INVERTED } onClick={ onShowModal }>
                { t('login') }
            </Button>
            <LoginModal
                isOpen={ isAuthModal }
                onClose={ onCloseModal }
            />
        </div>
    );
};