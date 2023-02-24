import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {

    const { t, i18n } = useTranslation( 'main_page' );

    return (
        <div>
            { t('main_page') }
            <BugButton/>
        </div>
    );
};

export default MainPage;