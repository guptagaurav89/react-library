import { Avatar } from '@mui/material';
import React from 'react';
import { UserAvatarProps } from './types';


const UserAvatar = (props: UserAvatarProps) => {
    const { size } = props;
    const avatarSize = size === 'small' ? '24px' : '32px';
    return (
        <Avatar >GG</Avatar>
    );
}

export default UserAvatar;