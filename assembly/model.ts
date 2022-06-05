import {PersistentVector, u128} from "near-sdk-as";

export class Reseñar{
    id : String;
    reseñas : String;
    constructor(id : String,  reseñas : String){
        this.id = id;
        this.reseñas = reseñas;
    } 
}

export const ReseñarTodo = new PersistentVector<Reseñar>("v")
