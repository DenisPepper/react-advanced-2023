import { lazy } from 'react';
import {WithSuspense} from "../../../HOC/with-suspense";

export const HomePageLazy = WithSuspense(lazy(() => import('./home-page')));
