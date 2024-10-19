import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


export interface MyFavouriteProps {
    color: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


function MyFavourite(props: MyFavouriteProps) {

    const { color = 'red', disabled = false, onClick } = props;

    return (
        <IconButton
            disabled={disabled}
            onClick={onClick}
        >
            <FavoriteIcon sx={{ color }} />
        </IconButton>
    );
}

export default MyFavourite;
