import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileForm = (state: IStateSchema) => state.profile?.form || undefined;
