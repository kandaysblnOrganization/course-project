import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || '';
