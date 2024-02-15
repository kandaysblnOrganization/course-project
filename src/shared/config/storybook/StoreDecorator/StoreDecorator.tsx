import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state } asyncReducers={ {
        ...defaultAsyncReducers,
        ...asyncReducers
    } }>
        <StoryComponent/>
    </StoreProvider>
);
