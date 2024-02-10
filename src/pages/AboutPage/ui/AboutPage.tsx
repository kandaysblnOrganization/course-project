import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = React.memo(() => {

    const { t, i18n } = useTranslation('about_page');

    return (
        <div>
            { t('about_page') }
            <Counter/>
        </div>
    );
});

export default AboutPage;
