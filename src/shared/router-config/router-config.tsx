import {HomePage} from "pages/home-page";
import {AboutPage} from "pages/about-page";
import {RouteProps} from "react-router-dom";

export const AppRoute = {
    Home: 'home',
    About: 'about',
} as const;

type TRoute = keyof typeof AppRoute;

export const RoutePath: Record<TRoute, string> = {
    Home: '/',
    About: '/about',
} as const;

const routeConfig: Record<TRoute, RouteProps> = {
    Home: {path: RoutePath.Home, element: <HomePage />},
    About: {path: RoutePath.About, element: <AboutPage />},
} as const;

export const routes = Object.values(routeConfig);
