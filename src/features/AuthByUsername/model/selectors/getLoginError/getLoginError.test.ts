import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginError } from './getLoginError';

describe( 'getLoginError', () => {
    test( 'should work fine', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect( getLoginError( state as IStateSchema ) ).toEqual( state?.loginForm?.error );
    } );

    test( 'should work fine without state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect( getLoginError( state as IStateSchema ) ).toEqual( '' );
    } );
} );
