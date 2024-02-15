import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileData = (state: IStateSchema) => state.profile?.data || undefined;
