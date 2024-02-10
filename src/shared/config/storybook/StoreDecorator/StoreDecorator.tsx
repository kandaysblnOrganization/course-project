import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state } asyncReducers={ {
        ...defaultAsyncReducers,
        ...asyncReducers
    } }>
        <StoryComponent/>
    </StoreProvider>
);
