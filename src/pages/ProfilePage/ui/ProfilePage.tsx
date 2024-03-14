import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { isNumeric } from 'shared/lib/isNumeric/isNumeric';
import { TCurrency } from 'entities/Currency';

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

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector( getProfileForm );
    const isLoading = useSelector( getProfileIsLoading );
    const error = useSelector( getProfileError );
    const readonly = useSelector( getProfileReadonly );

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

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames( classes.page, {}, [ className ] ) }>
                <ProfilePageHeader/>
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
                />
            </div>
        </DynamicModuleLoader>
    );
} );

export default ProfilePage;
