import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginState = (state: IStateSchema) => state?.loginForm || {};
