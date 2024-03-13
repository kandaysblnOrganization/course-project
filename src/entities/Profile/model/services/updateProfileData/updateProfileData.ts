import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'shared/config/storeConfig/StateSchema';
import { IProfile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData= createAsyncThunk<IProfile, undefined, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, getState } = thunkAPI;
        const formData = getProfileForm( getState() );

        try {
            const response = await extra.api.put<IProfile>( '/profile', formData );

            thunkAPI.fulfillWithValue( response.data );

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue( 'error' );
        }
    }
);
