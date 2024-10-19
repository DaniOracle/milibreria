import { default as React } from 'react';
export interface MyFavouriteProps {
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
}
declare const MyFavourite: React.FC<MyFavouriteProps>;
export default MyFavourite;
