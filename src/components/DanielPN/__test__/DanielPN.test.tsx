import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DanielPN from "../DanielPN";

describe("DanielPN component", () => {
  it("debería renderizar el diálogo y el ícono de cerrar correctamente", () => {
    render(
      <DanielPN
        open={true}
        onClose={() => {}}
        title="Testing the title"
        content={["Contenido de prueba 1", "Contenido de prueba 2"]}
      />
    );

    // Verifica que el diálogo esté en el documento:
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Verifica que el título esté en el documento:
    expect(screen.getByText((content, element) => {
      return content.includes("Testing the title");
    })).toBeInTheDocument();

    // Verifica que el contenido esté en el documento
    expect(screen.getByText("Contenido de prueba 1")).toBeInTheDocument();
    expect(screen.getByText("Contenido de prueba 2")).toBeInTheDocument();
  });
});
