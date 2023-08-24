import { getImagen } from "../../base-pruebas/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un error si no tenemos una api key ", async () => {
    const url = await getImagen();

    expect(url).toBe("No se encontro");
  });
});
