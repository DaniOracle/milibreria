import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../MyFavourite";

describe("MyFavourite component", () => {
  it("El botón de favorito se debería renderizar correctamente", () => {
    render(
      <MyFavourite 
        color="green" 
        disabled={false} 
        onClick={() => {}} 
      />
    );
    
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const icon = screen.getByTestId("FavoriteIcon");
    expect(icon).toBeInTheDocument();
  });
});
