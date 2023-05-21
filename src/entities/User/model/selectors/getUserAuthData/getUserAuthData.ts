import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';
import { IUserSchema } from '../../types/User';

export const getUserAuthData = createSelector(
    getUser,
    (user: IUserSchema) => user.authData
);