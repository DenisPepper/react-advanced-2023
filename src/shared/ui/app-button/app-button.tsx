import css from './app-button.module.css';
import {ButtonHTMLAttributes, ReactNode} from 'react';
import {buildNames} from 'shared/util/build-css-class-names/build-names';

type AppButtonStyle = 'clear'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    buttonStyle: AppButtonStyle;
}

export const AppButton = (props: AppButtonProps) => {
    const {children, buttonStyle, ...restProps} = props;

    return (
        <button
            className={buildNames([css.button, css[buttonStyle]])}
            type='button'
            {...restProps}
        >
            {children}
        </button>
    );
}
