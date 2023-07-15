import { lazy } from 'react';
import {WithSuspense} from 'shared/HOC/with-suspense';

export const AboutPageLazy = WithSuspense(lazy(() => import('./about-page')));
