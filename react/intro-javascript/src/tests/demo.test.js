test("Esta prueba no puede fallar ", () => {
  const mensaje = "Hola Braian";

  const mensaje2 = mensaje.trim();

  expect(mensaje).toBe(mensaje2);
});
