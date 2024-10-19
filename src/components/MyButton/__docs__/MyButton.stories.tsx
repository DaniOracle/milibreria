import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";

const meta: Meta<typeof Example> = {
    title: "MyButton",
    component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: "Iniciar sesión",
        txtcolor: 'black',
        backgroundColor: "#ffefc7",
        bordercolor: "#000000",
        borderwidth: '2px',
        hoverbackgroundcolor: "#dcfbff",
        hovertxtColor: "#000000",
        disabled: false,
        size: "large",
        onClick: () => alert("Button Primary"),
    },
};

export const Secondary: Story = {
    args: {
        text: "Button Secondary",
        txtcolor: 'white',
        backgroundColor: 'pink',
        bordercolor: 'darkpink',
        borderwidth: '2px',
        hoverbackgroundcolor: 'darkpink',
        hovertxtColor: 'black',
        disabled: false,
        size: "small",
        onClick: () => alert("Button Secondary"),
    },
};
