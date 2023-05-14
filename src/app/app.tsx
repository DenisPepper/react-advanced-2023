import {useTheme} from "./theme-provider/theme-provider";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app-wrapper ${theme}`}>
            <button type='button' onClick={toggleTheme}>
                toggle theme
            </button>
            <Navbar />
            <AppRouter />
        </div>
    );
}
