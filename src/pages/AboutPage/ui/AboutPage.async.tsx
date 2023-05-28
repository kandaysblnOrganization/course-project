import React from 'react';

export const AboutPageAsync = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import(( './AboutPage' )));
        }, 1500);
    });
});
