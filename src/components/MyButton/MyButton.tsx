import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

//import Daniel Pérez Núñez from '@human';

//Declaro la interface del componente.
export interface MyButtonProps {
    text: string; //texto del botón
    txtcolor: string; //color del texto del botón
    backgroundColor: string; //color del botón
    bordercolor: string;
    borderwidth: string,
    size?: "small" | "medium" | "large";
    hoverbackgroundcolor: string;
    hovertxtColor: string,
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

// Defino el componente MyButton utilizando styled
const StyledButton = styled(Button)<MyButtonProps>(({

    txtcolor,
    backgroundColor,
    bordercolor,
    borderwidth,
    hoverbackgroundcolor,
    hovertxtColor

}) => ({

    backgroundColor,
    color: txtcolor,
    border: `${borderwidth} solid ${bordercolor}`,

    '&:hover': {

        backgroundColor: hoverbackgroundcolor,
        color: hovertxtColor,

    },

}));
//Defino mi componente MyButton
function MyButton(props: MyButtonProps) {
    const { text, size, disabled, onClick } = props;
    return (

        <StyledButton
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    )
}
export default MyButton;