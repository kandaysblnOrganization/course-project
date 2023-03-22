import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface INavbarProps {
    className?: string;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [ isAuthModal, setIsAuthModal ] = React.useState<boolean>(false);

    const onToggle = React.useCallback(() => {
        setIsAuthModal(prevState => !prevState);
    }, []);

    return (
        <div className={ classNames(classes.navbar, {}, [ className ]) }>
            <Button theme={ ButtonTheme.CLEAR_INVERTED } onClick={ onToggle }>
                { t('login') }
            </Button>
            <Modal
                isOpen={ isAuthModal }
                onClose={ onToggle }
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem eius, fuga harum iure
                minima molestias neque soluta temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto asperiores at consectetur ea fuga hic laborum libero maiores modi, molestias nesciunt
                pariatur quam qui recusandae reiciendis rerum voluptatibus! Assumenda blanditiis delectus, eligendi
                et eum fuga maxime optio perspiciatis quas qui quidem quis rem sequi! Fugit odit quos sequi veniam
                voluptatem?
            </Modal>
        </div>
    );
};