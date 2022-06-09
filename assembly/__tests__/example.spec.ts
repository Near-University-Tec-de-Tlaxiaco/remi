import {logging, PersistentVector} from "near-sdk-as";
import {guardarReseña, Reseña, guardarPrestador, Prestador, guardarUsuario, Usuario} from "../model"
import {setReseña, getReseña, deleteReseña, tamañoReseña, getTodasReseñas} from ".."
const titulo = 'Esplendido';
const texto = 'Excelente servicio, nunca habia recibido mejores muebles en mi vida';
const calificacion = 9;

let reseñaEjemplo = new Reseña(titulo, texto, calificacion);

describe("Publicar Reseña", () => {
    it('No se publico la reseña debido a un error', () => {
        expect(setReseña('Esplendido', 'Excelente servicio, nunca habia recibido mejores muebles en mi vida', 9)).toStrictEqual
        (reseñaEjemplo);
    })
  })

const resñaInd = guardarReseña.length;
const data = new Array<Reseña>(resñaInd);
for(let i=0; i < resñaInd; i++) {
    data[i] = guardarReseña[i]
}

  describe("Obtener Reseña", () => {
    it('No hay reseñas publicadas, o hay un error', () => {
        expect(getTodasReseñas()).toStrictEqual(data)
    })
  })
