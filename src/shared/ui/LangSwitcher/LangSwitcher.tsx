import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import classes from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
	className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
	const {
		className,
	} = props;

	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			theme={ ButtonTheme.CLEAR }
			className={ classNames(classes.langSwitcher, {}, [ className ]) }
			onClick={ toggleLanguage }
		>
			{ t('language') }
		</Button>
	);
};