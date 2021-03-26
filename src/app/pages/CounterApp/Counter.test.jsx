import { render } from "@testing-library/react";

import {shallow} from 'enzyme';
import {
  getArray,
  getCategorias,
  getHeroesById,
  getHeroesByIdAsync,
  getHeroesByOwner,
  getUser,
  getUsuariosActivos,
  validarString,
} from "../../pruebas";
import _heroesDB from "../../pruebas/json";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el archivo Counter.test.js", () => {
  test("debe se iguales los string", () => {
    const messaje = "hola mundo";
    const message = `hola mundo`;
    expect(message).toBe(messaje);
  });
});

describe("Prueba de template String", () => {
  test("debe se iguales los string", () => {
    let saludo = validarString("oscar");
    let Expected = `hola oscar!`;
    expect(saludo).toBe(Expected);
  });
});

describe("Prueba de trart datos", () => {
  test("debe se retornar un objeto", () => {
    let saludo = getUser();
    let prieba = {
      uid: "ab1234",
      name: "osedhelu",
    };
    expect(saludo).toEqual(prieba);
  });
});

describe("Prueba De retornos", () => {
  test("debe se retornar un objeto al pasarle un nombre", () => {
    let saludo = getUsuariosActivos("camila");
    let prieba = {
      uid: "ab1234",
      name: "camila",
    };
    expect(saludo).toEqual(prieba);
  });

  //72204078
  test("Retoena un array", () => {
    let [str, num] = getArray();
    let vstr = typeof str;
    let vnum = typeof num;

    expect(vstr).toEqual("string");
    expect(vnum).toEqual("number");
  });

  test("retorna un heroe por id", () => {
    let id = 1;
    const heroe = getHeroesById(id);
    const search = _heroesDB.find((resp) => resp.id === id);

    expect(heroe).toEqual(search);
  });
  test("retorna un heroe un undefined", () => {
    let id = 100;
    const heroe = getHeroesById(id);
    // const search = _heroesDB.find(resp => resp.id === id)

    expect(heroe).toBe(undefined);
  });
  test("debe retornar un array de los heroes de marvel", () => {
    const owner = "Marvel";
    const length = 2;
    let heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(length);
  });
  test("debe retornar un array de los heroes de DC", () => {
    const owner = "DC";
    let heroes = getHeroesByOwner(owner);
    let heroes2 = _heroesDB.filter((resp) => resp.owner === owner);
    expect(heroes).toEqual(heroes2);
  });
});

describe("Pruebas de asincronia", () => {
  test("Esta valida mis promesas", (done) => {
    let id = 1;
    getHeroesByIdAsync(id).then((resp) => {
      expect(resp).toBe(_heroesDB[0]);
      done();
    });
  });
  test("Retorna un error si el heroe no existe", (done) => {
    let id = 10;
    getHeroesByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar un heroe");
      done();
    });
  });
  test("Pruebas usando async y await -- prueba un error", async () => {
    let aa = await getCategorias("categorias_");
    // let bb = aa.find(resp => resp.NOMBRE  === 'Home Office')
    expect(aa).toBe(false);
  });
});

describe("Haciendo pruebas en componentes", () => {
  // test('test en component <PrimeraApp /> debe mostrar "Hola Soy Oscar"', () => {
  // 	let text = 'Hola Soy Oscar';
  // 	let {getByText} = render(<Prim eraApp  saludos={text}/>);
  // 	expect(getByText(text)).toBeInTheDocument()
  // })

  test('test en component <PrimeraApp /> debe mostrar "Hola Soy Oscar"', () => {
  	let text = 'Hola Soy Oscar';
	  
	let wrapper = shallow(<PrimeraApp  saludos={text}/>)
	expect(wrapper).toMatchSnapshot();
  });
});
