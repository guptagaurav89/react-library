import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SearchField from '.';

export default {
    component: SearchField,
    title: 'Example/SearchField',
    argTypes: {}
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

export const Default = Template.bind({});