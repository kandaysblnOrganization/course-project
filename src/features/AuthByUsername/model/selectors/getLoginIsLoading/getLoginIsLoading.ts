import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginIsLoading = (state: IStateSchema) => state?.loginForm?.isLoading || false;
