import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { IThunkConfig } from 'shared/config/storeConfig/StateSchema';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const {
                extra
            } = thunkAPI;

            const response = await extra.api.post<IUser>( '/login', authData );
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem( USER_LOCALSTORAGE_KEY, JSON.stringify( response.data ) );
            thunkAPI.dispatch( userActions.setAuthData( response.data ) );

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue( 'error' );
        }
    }
);
