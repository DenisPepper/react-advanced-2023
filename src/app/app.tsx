import {useTheme} from "./theme-provider/theme-provider";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/navbar";

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app-wrapper ${theme}`}>
            <Navbar />
            <AppRouter />
        </div>
    );
}
