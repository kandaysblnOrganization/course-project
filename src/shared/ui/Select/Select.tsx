import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

interface ISelectOption {
    value: string;
    text: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOption[];
    value?: string;
    onChange?: (value: string) => void
}

const SelectComponent: React.FC<ISelectProps> = (props) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
    } = props;

    const mods: Mods = {};

    const optionsList = useMemo( () => {
        return options?.map( (item) => (
            <option
                className={ classes.selectOption }
                value={ item.value }
                key={ `select-option-${ item.value }` }
            >
                { item.text }
            </option>
        ) );
    }, [ options ] );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.( e.target.value );
    };

    return (
        <div className={ classNames( classes.selectWrapper, mods, [ className ] ) }>
            { label && (
                <span className={ classes.label }>
                    { label }
                </span>
            ) }
            <select
                value={ value }
                className={ classes.select }
                onChange={ onChangeHandler }
            >
                { optionsList }
            </select>
        </div>
    );
};

export const Select = memo( SelectComponent );
