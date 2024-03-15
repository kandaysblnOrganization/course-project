import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    validateProfileErrors
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { isNumeric } from 'shared/lib/isNumeric/isNumeric';
import { TCurrency } from 'entities/Currency';
import { TCountry } from 'entities/Country';
import { Text } from 'shared/ui/Text/Text';

interface IProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = React.memo( (props: IProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector( getProfileForm );
    const isLoading = useSelector( getProfileIsLoading );
    const error = useSelector( getProfileError );
    const readonly = useSelector( getProfileReadonly );
    const validateErrors = useSelector( getProfileValidateErrors );

    useEffect( () => {
        dispatch( fetchProfileData() );
    }, [ dispatch ] );

    const onChangeFirstName = useCallback( (value: string) => {
        dispatch( profileActions.updateProfile( { firstname: value } ) );
    }, [ dispatch ] );

    const onChangeLastName = useCallback( (value: string) => {
        dispatch( profileActions.updateProfile( { lastname: value } ) );
    }, [ dispatch ] );

    const onChangeAge = useCallback( (value: string) => {
        if (isNumeric( value )) {
            dispatch( profileActions.updateProfile( { age: +value } ) );
        }
    }, [ dispatch ] );

    const onChangeCity = useCallback( (value: string) => {
        dispatch( profileActions.updateProfile( { city: value } ) );
    }, [ dispatch ] );

    const onChangeUsername = useCallback( (value: string) => {
        dispatch( profileActions.updateProfile( { username: value } ) );
    }, [ dispatch ] );

    const onChangeAvatar = useCallback( (value: string) => {
        dispatch( profileActions.updateProfile( { avatar: value } ) );
    }, [ dispatch ] );

    const onChangeCurrency = useCallback( (value: TCurrency) => {
        dispatch( profileActions.updateProfile( { currency: value } ) );
    }, [ dispatch ] );

    const onChangeCountry = useCallback( (value: TCountry) => {
        dispatch( profileActions.updateProfile( { country: value } ) );
    }, [ dispatch ] );

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames( classes.page, {}, [ className ] ) }>
                <ProfilePageHeader/>

                { validateErrors && validateErrors.length > 0 && validateErrors.map( (error) => (
                    <Text
                        key={ `profile-page-validate-error-${ error }` }
                        theme='error'
                        text={ t(validateProfileErrors[error]) }
                    />
                ) ) }

                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    readonly={ readonly }
                    onChangeLastName={ onChangeLastName }
                    onChangeFirstName={ onChangeFirstName }
                    onChangeAge={ onChangeAge }
                    onChangeCity={ onChangeCity }
                    onChangeUsername={ onChangeUsername }
                    onChangeAvatar={ onChangeAvatar }
                    onChangeCurrency={ onChangeCurrency }
                    onChangeCountry={ onChangeCountry }
                />
            </div>
        </DynamicModuleLoader>
    );
} );

export default ProfilePage;
