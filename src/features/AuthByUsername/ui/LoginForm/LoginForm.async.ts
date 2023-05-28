import React from 'react';
import { ILoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<React.FC<ILoginFormProps>>(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import(( './LoginForm' )));
        }, 1500);
    });
});
