import React from "react";

export interface UserAvatarProps {
    size: 'small' | 'medium' | 'large';
    badge: React.ReactNode;
    onClick: () => void;
}