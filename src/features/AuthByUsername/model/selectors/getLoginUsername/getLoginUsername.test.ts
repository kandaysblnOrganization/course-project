import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe( 'getLoginUserName all tests', () => {
    test( 'should work fine', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
            },
        };

        expect( getLoginUsername( state as IStateSchema ) ).toEqual( state?.loginForm?.username );
    } );

    test( 'should work fine without state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect( getLoginUsername( state as IStateSchema ) ).toEqual( '' );
    } );
} );
