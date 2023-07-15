import { lazy } from 'react';
import {WithSuspense} from 'shared/HOC/with-suspense';

export const HomePageLazy = WithSuspense(lazy(() => import('./home-page')));
