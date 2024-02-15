import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
	className?: string;
}

export const ProfileCard: React.FC<IProfileCardProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation( 'profile' );

    const data = useSelector( getProfileData );
    const isLoading = useSelector( getProfileIsLoading );
    const error = useSelector( getProfileError );

    return (
        <div className={ classNames( classes.card, {}, [ className ] ) }>
            <div className={ classes.header }>
                <Text title={ t( 'profile_title' ) }/>
                <Button theme={ ButtonTheme.OUTLINED }>{ t( 'profile_edit_button_text' ) }</Button>
            </div>
            <div className={ classes.body }>
                <Input
                    value={ data?.firstname }
                    placeholder={ t( 'profile_firstname_input_placeholder' ) }
                    className={ classes.input }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t( 'profile_lastname_input_placeholder' ) }
                    className={ classes.input }
                />
            </div>
        </div>
    );
};
