import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'entities/User';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5050/login', authData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log('error login by username: ', err);
            return thunkAPI.rejectWithValue('error');
        }
    }
);