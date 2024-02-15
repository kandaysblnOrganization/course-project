import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileError = (state: IStateSchema) => state.profile?.error || undefined;
