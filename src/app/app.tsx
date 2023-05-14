import {Link} from "react-router-dom";
import {useTheme} from "./theme-provider/theme-provider";
import {AppRouter} from "app/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app-wrapper ${theme}`}>
            <button type='button' onClick={toggleTheme}>
                toggle theme
            </button>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/about'}>About page</Link></li>
            </ul>
            <AppRouter />
        </div>
    );
}
