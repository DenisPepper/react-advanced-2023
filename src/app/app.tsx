import {useTheme} from './theme-provider/theme-provider';
import {AppRouter} from 'app/router';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from 'widgets/sidebar';

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app-wrapper ${theme}`}>
            <div className='navbar'>
                <Navbar />
            </div>
            <Sidebar />
            <div className='main'>
                <AppRouter />
            </div>
        </div>
    );
}
