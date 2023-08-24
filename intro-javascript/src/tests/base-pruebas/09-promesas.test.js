import { getHeroeByIdAsync } from "../../base-pruebas/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas.js", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe de retornar un error si heroe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      done();
    });
  });
});
