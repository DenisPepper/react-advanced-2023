import { lazy } from 'react';
import {WithSuspense} from "../../../HOC/with-suspense";

export const AboutPageLazy = WithSuspense(lazy(() => import('./about-page')));
