import { logging, PersistentUnorderedMap} from "near-sdk-as";

export const reseñas = new PersistentUnorderedMap<string, string>("Reseñas");

//Método para guardar reseñas
export function setReseña(id: string, reseña: string): void {
    logging.log("Nueva reseña publicada");
    reseñas.set(id, reseña);
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

