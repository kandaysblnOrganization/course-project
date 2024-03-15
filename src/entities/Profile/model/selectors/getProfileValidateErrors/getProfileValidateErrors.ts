import { IStateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileValidateErrors = (state: IStateSchema) => state.profile?.validateErrors;
