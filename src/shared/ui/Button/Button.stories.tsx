import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ ThemeDecorator( Theme.DARK ) ];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ ThemeDecorator( Theme.DARK ) ];

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};

OutlinedDark.decorators = [ ThemeDecorator( Theme.DARK ) ];