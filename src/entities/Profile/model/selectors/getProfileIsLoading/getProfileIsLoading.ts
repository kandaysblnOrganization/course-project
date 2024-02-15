import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading || false;
