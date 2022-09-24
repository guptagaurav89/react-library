import { Avatar } from '@mui/material';
import React from 'react';
const UserAvatar = (props) => {
    const { size } = props;
    const avatarSize = size === 'small' ? '24px' : '32px';
    return (React.createElement(Avatar, null, "GG"));
};
export default UserAvatar;
