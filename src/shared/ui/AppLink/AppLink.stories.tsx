import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ ThemeDecorator( Theme.DARK ) ];

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED_PRIMARY,
};

export const InvertedDark = Template.bind( {} );
InvertedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED_PRIMARY,
};
InvertedDark.decorators = [ ThemeDecorator( Theme.DARK ) ];