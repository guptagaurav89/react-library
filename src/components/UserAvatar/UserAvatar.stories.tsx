import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import UserAvatar from './UserAvatar';

export default {
    component: UserAvatar,
    title: 'Example/UserAvatar',
    argTypes: { onClick: { action: 'clicked '}}
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});