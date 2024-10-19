import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderIconProps {

    color?: string;
    disabled?: boolean;
    onClick?: () => void;

}

const MyFavouriteBorderIcon: React.FC<MyFavouriteBorderIconProps> = ({

    color = 'red',
    disabled = false,
    onClick


}) => {
    return (

        <IconButton

            disabled={disabled}
            onClick={onClick}

        >
        
            <FavoriteBorderIcon sx={{ color }} />

        </IconButton>

    )
};
export default MyFavouriteBorderIcon;