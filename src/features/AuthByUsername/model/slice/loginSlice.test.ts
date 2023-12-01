import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { DeepPartial } from '@reduxjs/toolkit';

describe( 'loginSlice test', () => {
    test( 'login slice set username reducer', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: '123',
        };
        expect( loginReducer( state as ILoginSchema, loginActions.setUsername( 'bera' ) ) ).toEqual( { username: 'bera' } );
    } );

    test( 'login slice set password reducer', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '123',
        };
        expect( loginReducer( state as ILoginSchema, loginActions.setPassword( 'password' ) ) ).toEqual( { password: 'password' } );
    } );
} );
