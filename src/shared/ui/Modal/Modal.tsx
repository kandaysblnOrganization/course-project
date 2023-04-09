import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';

const ANIMATION_DELAY = 200;

interface IModalProps {
    className?: string;
    children?: React.ReactNode;
    lazy?: boolean;
    isOpen?: boolean;
    onClose?: () => void
}

export const Modal: React.FC<IModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose,
    } = props;

    const [ isClosing, setIsClosing ] = React.useState(false);
    const [ isMounted, setIsMounted ] = React.useState(false);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = React.useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [ onClose ]);

    const onKeyDown = React.useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [ closeHandler ]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, string | boolean> = {
        [classes.opened]: isOpen,
        [classes.closing]: isClosing,
    };

    React.useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [ isOpen ]);

    React.useEffect(() => {

        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [ isOpen, onKeyDown ]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(classes.modal, mods, [ className ]) }>
                <div
                    className={ classes.modalOverlay }
                    onClick={ closeHandler }
                >
                    <div
                        className={ classes.modalContent }
                        onClick={ onContentClick }
                    >
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};