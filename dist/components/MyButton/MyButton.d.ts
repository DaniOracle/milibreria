import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtcolor: string;
    backgroundColor: string;
    bordercolor: string;
    borderwidth: string;
    size?: "small" | "medium" | "large";
    hoverbackgroundcolor: string;
    hovertxtColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
