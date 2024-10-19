import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export interface MyFavouriteBorderIconProps {
    color: string; 
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


function MyFavouriteBorderIcon(props: MyFavouriteBorderIconProps) {

    const { color = 'red', disabled = false, onClick } = props;

    return (
        <IconButton
            disabled={disabled}
            onClick={onClick}
        >
            <FavoriteBorderIcon sx={{ color }} />
        </IconButton>
    );
}

export default MyFavouriteBorderIcon;
