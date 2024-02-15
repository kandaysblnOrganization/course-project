import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ProfilePage.module.scss';

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

    useEffect( () => {
        dispatch( fetchProfileData() );
    }, [ dispatch ] );

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames( classes.page, {}, [ className ] ) }>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
} );

export default ProfilePage;
