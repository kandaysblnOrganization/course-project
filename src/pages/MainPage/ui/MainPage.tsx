import React from 'react';
import { useTranslation } from "react-i18next";

const MainPage = () => {

	const { t, i18n } = useTranslation('main_page');

	return (
		<div>
			{t('main_page')}
		</div>
	);
};

export default MainPage;