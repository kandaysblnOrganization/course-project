import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: IProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice( {
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase( fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            } )
            .addCase( fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = undefined;
            } )
            .addCase( fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = undefined;
                state.error = action.payload;
            } );
    }
} );

export const {
    actions: profileActions,
    reducer: profileReducer
} = profileSlice;
