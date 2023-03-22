import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem( LOCAL_STORAGE_THEME_KEY ) as Theme || Theme.LIGHT;

interface IThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider: React.FC<IThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme
    } = props;
    const [ theme, setTheme ] = React.useState<Theme>(initialTheme || defaultTheme);

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