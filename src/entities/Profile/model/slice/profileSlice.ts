import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: IProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
    form: undefined,
};

export const profileSlice = createSlice( {
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase( fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            } )
            .addCase( fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.error = undefined;
            } )
            .addCase( fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = undefined;
                state.error = action.payload;
            } )
            .addCase( updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            } )
            .addCase( updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.error = undefined;
                state.readonly = true;
            } )
            .addCase( updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            } );
    }
} );

export const {
    actions: profileActions,
    reducer: profileReducer
} = profileSlice;
