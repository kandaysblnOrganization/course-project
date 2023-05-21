export {
    userReducer,
    userActions
} from './model/slice/userSlice';

export {
    IUser,
    IUserSchema
} from './model/types/user';

export { getUser } from './model/selectors/getUser/getUser';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';