import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || '';
