import css from './sidebar.module.css';
import {useState} from "react";
import {buildNames} from "shared/util/build-css-class-names/build-names";
import {AppButton} from "shared/ui/app-button/app-button";
import {ThemeSwitcher} from "shared/ui/theme-switcher/theme-switcher";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleButtonClick = () => setCollapsed((prevState) => !prevState);

    return (
        <section
            className={buildNames([css.sidebar, 'sidebar'],
                {[css.expanded]: collapsed})}
        >
            <ThemeSwitcher/>
            <div className={css.toggle_button}>
                <AppButton buttonStyle='clear' onClick={handleToggleButtonClick}>
                    toggle
                </AppButton>
            </div>
        </section>
    );
}
