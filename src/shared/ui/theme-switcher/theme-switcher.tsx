import css from './theme-switcher.module.css';
import {useTheme} from 'app/theme-provider/theme-provider';
import {buildNames} from 'shared/util/build-css-class-names/build-names';

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    const modifier = theme === 'dark' ? css.light : css.dark;

    return (
        <button className={buildNames([css.icon, modifier])} type='button' onClick={toggleTheme}/>
    );
}
