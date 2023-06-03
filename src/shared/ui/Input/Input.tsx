import React, { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
    value?: string;
    label?: string;
    onChange?: (value: string) => void;
    className?: string;
    autofocus?: boolean;
}

export const Input = React.memo((props: IInputProps) => {
    const {
        className,
        autofocus,
        value,
        type = 'text',
        label,
        onChange,
        ...otherProps
    } = props;
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    React.useEffect(() => {
        if (autofocus) {
            if (inputRef) {
                inputRef.current.focus();
            }
        }
    }, [ autofocus ]);

    return (
        <div className={ classNames(classes.inputWrapper, {}, [ className ]) }>
            { label && (
                <p>
                    { label }
                </p>
            ) }
            <input
                ref={ inputRef }
                className={ classes.input }
                type={ type }
                value={ value }
                { ...otherProps }
                onChange={ onChangeHandler }
            />
        </div>
    );
});
