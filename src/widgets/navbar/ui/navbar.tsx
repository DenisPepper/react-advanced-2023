import css from './navbar.module.css';
import {AppLink} from "shared/ui/app-link/app-link";
import {ThemeSwitcher} from "shared/ui/theme-switcher/theme-switcher";

interface NavbarProps {
}

export const Navbar = (props: NavbarProps) => {

    return (
        <header className={css.header}>
            <nav className={css.navbar}>
                <ul className={css.links_list}>
                    <li><AppLink to={'/'} textContent='Home page' linkType='nav_link'/></li>
                    <li><AppLink to={'/about'} textContent='About page' linkType='nav_link'/></li>
                </ul>
            </nav>
            <ThemeSwitcher/>
        </header>
    );
}
