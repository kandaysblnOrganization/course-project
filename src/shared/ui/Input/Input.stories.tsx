import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    value: '123',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    value: '123',
    label: 'label',
};
