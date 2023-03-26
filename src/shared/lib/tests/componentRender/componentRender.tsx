import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'shared/config/storeConfig/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
}

export const componentRender = (component: React.ReactNode, options: IComponentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
    } = options;
    return render(
        <StoreProvider initialState={ initialState }>
            <MemoryRouter initialEntries={ [ route ] }>
                <I18nextProvider i18n={ i18nForTests }>
                    { component }
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};