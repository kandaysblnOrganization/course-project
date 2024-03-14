import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar { ...args } />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: undefined
})];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: {
            id: 1,
            username: 'user'
        }
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({
    user: undefined,
}) ];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {
            id: 1,
            username: 'user',
        }
    },
}) ];
