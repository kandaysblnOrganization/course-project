import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileReadonly = (state: IStateSchema) => state.profile?.readonly || false;
