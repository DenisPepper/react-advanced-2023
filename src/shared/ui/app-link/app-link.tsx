import css from './app-link.module.css';
import {Link, LinkProps} from "react-router-dom";
import {buildNames} from "shared/util/build-css-class-names/build-names";

type AppLinkType = 'nav_link';

interface AppLinkProps extends LinkProps {
    linkType: AppLinkType;
    textContent: string;
}

export const AppLink = (props: AppLinkProps) => {
    const {linkType, textContent, to, ...restProps} = props;

    const cssClassNames = [
        css.app_link,
        css[linkType]
    ];

    return (
        <Link
            className={buildNames(cssClassNames)}
            to={to}
            {...restProps}
        >
            {textContent}
        </Link>
    );
}
