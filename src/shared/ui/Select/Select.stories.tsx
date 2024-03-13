import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        {
            value: '1',
            text: 'Первый пункт',
        },
        {
            value: '2',
            text: 'Второй пункт',
        },
        {
            value: '3',
            text: 'Третий пункт',
        }
    ]
};
