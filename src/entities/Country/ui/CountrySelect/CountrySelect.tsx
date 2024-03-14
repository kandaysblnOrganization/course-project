import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { TCountry } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';

interface ICountrySelectProps {
    className?: string;
    value?: TCountry;
    readonly?: boolean;
    onChange?: (value: TCountry) => void;
}

const options = [
    {
        value: Country.USA,
        text: Country.USA,
    },
    {
        value: Country.Russia,
        text: Country.Russia
    },
    {
        value: Country.Germany,
        text: Country.Germany,
    }
];

const CountrySelectComponent: React.FC<ICountrySelectProps> = (props) => {
    const {
        className,
        readonly,
        value,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback( (value: string) => {
        onChange?.( value as TCountry );
    }, [ onChange ] );

    return (
        <Select
            className={ classNames( '', {}, [ className ] ) }
            label={ t( 'country_select_label' ) }
            value={ value }
            readonly={ readonly }
            options={ options }
            onChange={ onChangeHandler }
        />
    );
};

export const CountrySelect = memo( CountrySelectComponent );
