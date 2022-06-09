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

export class Usuario{
    nombre : String;
    apellido : String;
    email : String;
    wallet : String;
    necesidades : String;
    constructor(nombre : String,  apellido : String, email : String, wallet : String, necesidades : String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.wallet = wallet;
        this.necesidades = necesidades;
    }
}

export const ReseñarTodo = new PersistentVector<Reseña>("v");
export const guardarUsuario = new PersistentVector<Usuario>("v");
