import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginState } from './getLoginState';

describe( 'getLoginState all tests', () => {
    test( 'should work fine', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123456',
                error: '',
                isLoading: false,
                username: 'username',
            },
        };

        expect( getLoginState( state as IStateSchema ) ).toEqual( state.loginForm );
    } );

    test( 'should work fine without state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect( getLoginState( state as IStateSchema ) ).toEqual( {} );
    } );
} );
