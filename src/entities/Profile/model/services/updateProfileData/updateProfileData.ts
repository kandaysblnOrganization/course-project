import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'shared/config/storeConfig/StateSchema';
import { IProfile, TValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, undefined, IThunkConfig<TValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, getState } = thunkAPI;
        const formData = getProfileForm( getState() );

        if (!formData) {
            return thunkAPI.rejectWithValue( [ 'NO_DATA' ] );
        }

        const errors = validateProfileData( formData );

        if (errors.length > 0) {
            return thunkAPI.rejectWithValue( errors );
        }

        try {
            const response = await extra.api.put<IProfile>( '/profile', formData );

            thunkAPI.fulfillWithValue( response.data );

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue( [ 'SERVER_ERROR' ] );
        }
    }
);
