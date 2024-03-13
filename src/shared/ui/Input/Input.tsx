import React, { InputHTMLAttributes } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    className?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = React.memo( (props: IInputProps) => {
    const {
        className,
        autofocus,
        value,
        type = 'text',
        label,
        onChange,
        readonly,
        ...otherProps
    } = props;
    const inputRef = React.useRef<HTMLInputElement | null>( null );
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.( event.target.value );
    };

    const mods: Mods = {
        [classes.readonly]: readonly,
    };

    React.useEffect( () => {
        if (autofocus) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [ autofocus ] );

    return (
        <div className={ classNames( classes.inputWrapper, mods, [ className ] ) }>
            { label && (
                <p>
                    { label }
                </p>
            ) }
            <input
                readOnly={ readonly }
                ref={ inputRef }
                className={ classes.input }
                type={ type }
                value={ value }
                { ...otherProps }
                onChange={ onChangeHandler }
            />
        </div>
    );
} );
