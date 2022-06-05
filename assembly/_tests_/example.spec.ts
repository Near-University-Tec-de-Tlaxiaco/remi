import {logging, PersistentVector} from "near-sdk-as";
import {ReseñarTodo, Reseñar} from "../model"
import {setReseña, getReseña, deleteReseña, reseñaLenght, getTodasReseñas} from ".."
const id = '1';
const reseñas = 'Excelente servicio, nunca habia recibido mejores muebles en mi vida';
let nuevaReseña = new Reseñar(id, reseñas);

describe("Publicar Reseña", () => {
    it('No se publico la reseña debido a un error', () => {
        expect(setReseña('1', 'Excelente servicio, nunca habia recibido mejores muebles en mi vida')).toStrictEqual(nuevaReseña);
    })
  })