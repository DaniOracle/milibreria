import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
    title: "DanielPN",
    component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        open: true,
        onClose: () => alert("Dialog closed"),
        title: "Título",
        content: ["Contenido", "Contenido de prueba 2"],
        titleSx: { color: 'primary.main', fontWeight: 'bold' },
        contentSx: {
            padding: "16px",
            fontSize: "12px", 
        },
        dialogSx: { 
            backgroundColor: '#f5f5f5', 
        },
        width: "600px",
        height: "400px"
    },
};

export const Secondary: Story = {
    args: {
        open: true,
        onClose: () => alert("Dialog closed"),
        title: "Título de prueba 2",
        content: ["Contenido de prueba 3", "Contenido de prueba 4"],
        titleSx: { color: 'secondary.main', fontWeight: 'normal' },
        contentSx: { padding: '8px', fontSize: '14px' },
        dialogSx: { 
            backgroundColor: '#e0e0e0', 
        },
        width: "400px", 
        height: "300px" 
    },
};
