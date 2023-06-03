import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem eius, fuga harum iure\n' +
        '                minima molestias neque soluta temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                Architecto asperiores at consectetur ea fuga hic laborum libero maiores modi, molestias nesciunt\n' +
        '                pariatur quam qui recusandae reiciendis rerum voluptatibus! Assumenda blanditiis delectus, eligendi\n' +
        '                et eum fuga maxime optio perspiciatis quas qui quidem quis rem sequi! Fugit odit quos sequi veniam\n' +
        '                voluptatem?',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolorem eius, fuga harum iure\n' +
        '                minima molestias neque soluta temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                Architecto asperiores at consectetur ea fuga hic laborum libero maiores modi, molestias nesciunt\n' +
        '                pariatur quam qui recusandae reiciendis rerum voluptatibus! Assumenda blanditiis delectus, eligendi\n' +
        '                et eum fuga maxime optio perspiciatis quas qui quidem quis rem sequi! Fugit odit quos sequi veniam\n' +
        '                voluptatem?',
};
PrimaryDark.decorators = [ ThemeDecorator(Theme.DARK) ];
