import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

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

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames( '', {}, [ className ] ) }>
                { t( '' ) }
            </div>
        </DynamicModuleLoader>
    );
} );

export default ProfilePage;
