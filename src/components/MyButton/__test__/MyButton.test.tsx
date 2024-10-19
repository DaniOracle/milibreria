import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomButton from "../MyButton";
describe("CustomButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(
            <CustomButton
            text='Hola'
            txtcolor='white'
            backgroundcolor='orange'
            bordercolor='black'
            borderwidth='2px'
            hoverbackgroundcolor='red'
            hovertxtcolor='yellow'
            />
        );
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
