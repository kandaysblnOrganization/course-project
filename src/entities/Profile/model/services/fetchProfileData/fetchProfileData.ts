import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'shared/config/storeConfig/StateSchema';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, undefined, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra } = thunkAPI;

        try {
            const response = await extra.api.get<IProfile>( '/profile' );

            thunkAPI.fulfillWithValue( response.data );

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue( 'error' );
        }
    }
);
