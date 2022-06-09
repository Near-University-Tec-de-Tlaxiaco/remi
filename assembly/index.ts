import {u128, logging, PersistentUnorderedMap} from "near-sdk-as";
import {guardarReseña, Reseña, guardarPrestador, Prestador, guardarUsuario, Usuario} from "./model"

export const reseñas = new PersistentUnorderedMap<string, string>("Reseñas");

const indReseña = guardarReseña.length;

//Método para guardar reseñas
export function setReseña(titulo : String, texto : String, calificacion : i32): Reseña {
    const newRsñ = new Reseña(titulo, texto, calificacion);
    guardarReseña.push(newRsñ);
    logging.log("Nueva reseña publicada");
    return newRsñ;
}

//Metodo para obtener todas las reseñas
export function getTodasReseñas(): Reseña[] {
    const data = new Array<Reseña>(indReseña);
    for(let i = 0; i < indReseña; i++) {
        data[i] = guardarReseña[i];
        logging.log(i);
    }
    return data;
}

//Método para borrar reseñas
export function deleteReseña(reseñaIndice : i32): bool{
    if(guardarReseña.length < reseñaIndice) {
        logging.log('La reseña no existe.');
        return false;
    }
    guardarReseña.swap_remove(reseñaIndice);
    logging.log('Reseña eliminada.');
    return true;
}

//Metodo para obtener el numero de reseñas
export function tamañoReseña(): number {
    return guardarReseña.length;
}

//Método para buscar reseñas
export function getReseña(Buscar: String): Reseña {
    const data = new Array<Reseña>(indReseña);
    for(let i = 0; i < indReseña; i++) {
        data[i] = guardarReseña[i];
        if (data[i].titulo==Buscar) {
            return guardarReseña[i];
        }
    }
    logging.log("No se encontro el comentario")
    return guardarReseña[indReseña+2];
}
