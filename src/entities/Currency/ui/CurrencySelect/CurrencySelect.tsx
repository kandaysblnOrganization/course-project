import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency, TCurrency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

interface ICurrencySelectProps {
    className?: string;
    value?: TCurrency;
    readonly?: boolean;
    onChange?: (value: TCurrency) => void;
}

const options = [
    {
        value: Currency.RUB,
        text: Currency.RUB,
    },
    {
        value: Currency.USD,
        text: Currency.USD,
    },
    {
        value: Currency.EUR,
        text: Currency.EUR,
    },
];

const CurrencySelectComponent: React.FC<ICurrencySelectProps> = (props) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback( (value: string) => {
        onChange?.( value as TCurrency );
    }, [ onChange ] );

    return (
        <Select
            className={ classNames( '', {}, [ className ] ) }
            label={ t( 'currency_select_label' ) }
            options={ options }
            value={ value }
            readonly={ readonly }
            onChange={ onChangeHandler }
        />
    );
};

export const CurrencySelect = memo( CurrencySelectComponent );
