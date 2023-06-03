import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginError = (state: IStateSchema) => state?.loginForm?.error || '';
