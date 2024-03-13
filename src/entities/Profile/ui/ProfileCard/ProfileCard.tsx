import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { IProfile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string | undefined;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
}

const ProfileCardComponent: React.FC<IProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
    } = props;

    const { t } = useTranslation( 'profile' );

    const mods: Mods = {
        [classes.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={ classNames( classes.card, {}, [ className, classes.loading ] ) }>
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={ classNames( classes.card, {}, [ className, classes.error ] ) }>
                <Text
                    align='center'
                    theme='error'
                    title={ t( 'profile_card_error_title' ) }
                    text={ t( 'profile_card_error_text' ) }
                />
            </div>
        );
    }

    return (
        <div className={ classNames( classes.card, mods, [ className ] ) }>
            <div className={ classes.body }>
                { data?.avatar && (
                    <div className={ classes.avatarWrapper }>
                        <Avatar src={ data.avatar } alt={ t( 'profile_avatar_img_alt' ) }/>
                    </div>
                ) }
                <Input
                    readonly={ readonly }
                    value={ data?.firstname }
                    placeholder={ t( 'profile_firstname_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeFirstName }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.lastname }
                    placeholder={ t( 'profile_lastname_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeLastName }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.age }
                    placeholder={ t( 'profile_age_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeAge }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.city }
                    placeholder={ t( 'profile_city_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeCity }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.username }
                    placeholder={ t( 'profile_username_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeUsername }
                />
                <Input
                    readonly={ readonly }
                    value={ data?.avatar }
                    placeholder={ t( 'profile_avatar_input_placeholder' ) }
                    className={ classes.input }
                    onChange={ onChangeAvatar }
                />

                <Select
                    label={t('profile_currency_select_label')}
                    options={[
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
                    ]}
                />
            </div>
        </div>
    );
};

export const ProfileCard = memo( ProfileCardComponent );
