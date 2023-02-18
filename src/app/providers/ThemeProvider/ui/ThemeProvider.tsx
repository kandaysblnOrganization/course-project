import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem( LOCAL_STORAGE_THEME_KEY ) as Theme || Theme.LIGHT;

const ThemeProvider: React.FC = ( { children } ) => {
    const [ theme, setTheme ] = React.useState<Theme>( defaultTheme );

    const providerValue: ThemeContextProps = React.useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [ theme ]);

    return (
        <ThemeContext.Provider value={ providerValue }>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;