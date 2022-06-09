import {PersistentVector, u128, context} from "near-sdk-as";

export class Reseña{
    titulo : String;
    texto : String
    calificacion : number;
    autor : String;
    constructor(titulo : String, texto : String, calificacion : number){
        this.titulo = titulo;
        this.texto = texto;
        this.calificacion = calificacion;
        this.autor = context.sender;
    }
}

export const ReseñarTodo = new PersistentVector<Reseña>("v")
