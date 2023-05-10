import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./theme-provider/theme-provider";
import {AboutPage} from "pages/about-page";
import {HomePage} from "pages/home-page";

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
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </div>
    );
}
