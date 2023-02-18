import React from 'react';

export const MainPageAsync = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import(('./MainPage')));
        }, 1500);
    });
});