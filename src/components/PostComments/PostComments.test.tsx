import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from "./index";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
});
it("Deve permitir comentario corretamente", () => {
  render(<PostComment />);
  expect(screen.getByText("Comentar")).toBeInTheDocument();
  const inputComentario = screen.getByTestId("campo-comentario");
  const botaoComentar = screen.getByTestId("botão-comentario");
  const areaComantarios = screen.getByTestId("lista-comentarios");
  fireEvent.change(inputComentario, {
    target: { value: "Teste Primeiro Comentario" },
  });
  fireEvent.click(botaoComentar);
  expect(screen.getByText("Teste Primeiro Comentario")).toBeInTheDocument();
  fireEvent.change(inputComentario, {
    target: { value: "Teste Comentario 2" },
  });
  fireEvent.click(botaoComentar);
  expect(screen.getByText("Teste Comentario 2")).toBeInTheDocument();
  expect(areaComantarios.children.length).toBe(2);
});
