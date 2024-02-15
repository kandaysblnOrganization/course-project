import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe( 'getLoginPassword all tests', () => {
    test( 'should work fine', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123456',
            },
        };

        expect( getLoginPassword( state as IStateSchema ) ).toEqual( state?.loginForm?.password );
    } );

    test( 'should work fine without state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect( getLoginPassword( state as IStateSchema ) ).toEqual( '' );
    } );
} );
