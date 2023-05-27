import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';
import { IUserSchema } from '../../types/user';

export const getUserAuthData = createSelector(
    getUser,
    (user: IUserSchema) => user.authData
);
