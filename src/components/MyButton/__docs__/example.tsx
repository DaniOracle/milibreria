import React from "react";

import MyButton, { MyButtonProps } from "../MyButton";

function Example(props: MyButtonProps) {
    return (
        <MyButton
            text={props.text}
            txtcolor={props.txtcolor}
            backgroundColor={props.backgroundColor}
            bordercolor={props.bordercolor}
            borderwidth={props.borderwidth}
            size={props.size}
            hoverbackgroundcolor={props.hoverbackgroundcolor}
            hovertxtColor={props.hovertxtColor}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    );
}

export default Example;
