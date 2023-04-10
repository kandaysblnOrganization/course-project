import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text { ...args } />;

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
    title: 'Заголовок',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    text: 'Текст',
};

export const PrimaryTitleAndText = Template.bind({});
PrimaryTitleAndText.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
};

export const PrimaryTitleDark = Template.bind({});
PrimaryTitleDark.args = {
    title: 'Заголовок',
};
PrimaryTitleDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    text: 'Текст',
};
PrimaryTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const PrimaryTitleAndTextDark = Template.bind({});
PrimaryTitleAndTextDark.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
};

PrimaryTitleAndTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];