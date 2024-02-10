import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface IProfilePageProps {
	className?: string;
}

const ProfilePage = React.memo( (props: IProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={ classNames( '', {}, [ className ] ) }>
            {t('')}
        </div>
    );
} );

export default ProfilePage;
