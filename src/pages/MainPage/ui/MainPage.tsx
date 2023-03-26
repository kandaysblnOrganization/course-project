import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {

    const { t, i18n } = useTranslation('main_page');

    return (
        <div>
            { t('main_page') }

            <Counter/>
        </div>
    );
};

export default MainPage;