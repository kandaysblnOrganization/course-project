import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';


interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const LoginModalComponent: React.FC<ILoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;
    return (
        <Modal
            className={ classNames( classes.loginModal, {}, [ className ] ) }
            isOpen={ isOpen }
            lazy
            onClose={ onClose }
        >
            <React.Suspense fallback={ <Loader/> }>
                <LoginFormAsync
                    onSuccess={ onClose }
                />
            </React.Suspense>
        </Modal>
    );
};

export const LoginModal = React.memo( LoginModalComponent );
