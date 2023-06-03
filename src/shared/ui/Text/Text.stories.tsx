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

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: 'Заголовок',
    theme: 'error',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    text: 'Текст',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: 'Текст',
    theme: 'error',
};

export const PrimaryTitleAndText = Template.bind({});
PrimaryTitleAndText.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
};

export const ErrorTitleAndText = Template.bind({});
ErrorTitleAndText.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
    theme: 'error',
};

export const PrimaryTitleDark = Template.bind({});
PrimaryTitleDark.args = {
    title: 'Заголовок',
};
PrimaryTitleDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const ErrorTitleDark = Template.bind({});
ErrorTitleDark.args = {
    title: 'Заголовок',
    theme: 'error',
};
ErrorTitleDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    text: 'Текст',
};
PrimaryTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    text: 'Текст',
    theme: 'error',
};
ErrorTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const PrimaryTitleAndTextDark = Template.bind({});
PrimaryTitleAndTextDark.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
};
PrimaryTitleAndTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const ErrorTitleAndTextDark = Template.bind({});
ErrorTitleAndTextDark.args = {
    title: 'Какой-то заголовок',
    text: 'Какой-то текст',
    theme: 'error',
};
ErrorTitleAndTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];
