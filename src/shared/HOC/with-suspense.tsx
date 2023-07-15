import React, { Suspense } from 'react';

export const WithSuspense = (Component: React.FunctionComponent) => (props: JSX.IntrinsicAttributes):JSX.Element  =>
    (
        <Suspense fallback={<div>loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
