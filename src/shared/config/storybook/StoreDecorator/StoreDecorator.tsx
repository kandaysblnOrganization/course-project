import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state }>
        <StoryComponent/>
    </StoreProvider>
);