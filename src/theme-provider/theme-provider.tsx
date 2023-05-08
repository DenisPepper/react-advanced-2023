import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type TTheme = 'dark' | 'light';

const DEFAULT_APP_THEME: TTheme = 'light';

const LOCAL_STORAGE_THEME_KEY = 'theme';

interface IThemeContextProps {
    theme: TTheme;

    toggleTheme(): void;
}

interface IThemeProviderProps {
    children: ReactNode;
}

const getThemeFromLocalStorage = () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

const setThemeToLocalStorage = (theme: TTheme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
};

const initTheme = (): TTheme => {
    let theme = getThemeFromLocalStorage();
    return theme === 'dark' || theme === 'light' ? theme : DEFAULT_APP_THEME;
};

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

export const ThemeProvider = (props: IThemeProviderProps) => {
    const {children} = props;
    const [theme, setTheme] = useState<TTheme>(initTheme());

    const toggleTheme = () => {
        setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
    };

    useEffect(() => setThemeToLocalStorage(theme), [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
