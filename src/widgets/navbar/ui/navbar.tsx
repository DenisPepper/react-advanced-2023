import css from './navbar.module.css';
import {AppLink} from 'shared/ui/app-link/app-link';

export const Navbar = () => {

    return (
        <header className={css.header}>
            <nav className={css.navbar}>
                <ul className={css['links-list']}>
                    <li><AppLink to={'/'} textContent='Home page' linkType='nav-link'/></li>
                    <li><AppLink to={'/about'} textContent='About page' linkType='nav-link'/></li>
                </ul>
            </nav>
        </header>
    );
}
