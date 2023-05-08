import {Counter} from "../counter/counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "../pages/about-page/about-page.lazy";
import {HomePageLazy} from "../pages/home-page/home-page.lazy";
import {useTheme} from "../../theme-provider/theme-provider";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app-wrapper ${theme}`}>
            <Counter/>
            <button type='button' onClick={toggleTheme}>
                toggle theme
            </button>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/about'}>About page</Link></li>
            </ul>
            <Routes>
                <Route path={'/'} element={<HomePageLazy/>}/>
                <Route path={'/about'} element={<AboutPageLazy/>}/>
            </Routes>
        </div>
    );
}
