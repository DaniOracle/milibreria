import React from 'react';
import MyFavouriteBorder, { MyFavouriteBorderIconProps } from '../MyFavouriteBorder';
import MyFavouriteBorderIcon from '../MyFavouriteBorder';

function Example(props: MyFavouriteBorderIconProps) {
    return (
        <MyFavouriteBorderIcon
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    );
}

export default Example;
