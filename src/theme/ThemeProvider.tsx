import React, { FC, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from "./ThemeContext";

const defaultTheme = localStorage.getItem( LOCAL_STORAGE_THEME_KEY ) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ( { children } ) => {
	const [ theme, setTheme ] = React.useState<Theme>( defaultTheme );

	const toggleTheme = ( theme: Theme ) => {
		setTheme( theme );
	};

	const providerValue: ThemeContextProps = useMemo( () => ( {
		theme: theme,
		setTheme: setTheme,
	} ), [ theme ] );

	return (
		<ThemeContext.Provider value={ providerValue }>
			{ children }
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;