import {u128, logging, PersistentUnorderedMap} from "near-sdk-as";
import {ReseñarTodo, Reseñar} from "./model"

export const reseñas = new PersistentUnorderedMap<string, string>("Reseñas");

const indReseña = ReseñarTodo.length;

//Método para guardar reseñas
export function setReseña(id: string, reseña: string): Reseñar {
    const newRsñ = new Reseñar(id, reseña);
    ReseñarTodo.push(newRsñ);
    logging.log("Nueva reseña publicada");
    return newRsñ;
}

//Método para buscar reseñas
export function getReseña(id: string): string | null {
    logging.log("Se ha encontrado una reseña");
    return reseñas.get(id);
}

//Método para borrar reseñas
export function deleteReseña(id: string): void{
    logging.log("Se ha borrado una reseña");
    reseñas.delete(id);
}

