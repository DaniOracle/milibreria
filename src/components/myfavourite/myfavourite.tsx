import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {

    color?: string;
    disabled?: boolean;
    onClick?: () => void;

}

const MyFavourite: React.FC<MyFavouriteProps> = ({

    color = 'red',
    disabled = false,
    onClick

}) => {

    return (

        <IconButton

            disabled={disabled}
            onClick={onClick}>

            <FavoriteIcon sx={{ color }} />

        </IconButton>

    );
};

export default MyFavourite;
