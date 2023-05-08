import {createContext, ReactNode, useContext, useState} from "react";

type TTheme = 'dark' | 'light';

const DEFAULT_APP_THEME: TTheme = 'light';

interface IThemeContextProps {
    theme: TTheme;
    toggleTheme(): void;
}

interface IThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

export const ThemeProvider = (props: IThemeProviderProps) => {
    const {children} = props;
    const [theme, setTheme] = useState<TTheme>(DEFAULT_APP_THEME);

    const toggleTheme = () => setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
