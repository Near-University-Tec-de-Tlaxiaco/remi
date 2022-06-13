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
    usuario : String;
    constructor(){
        this.usuario = context.sender;
    }
}

export class Prestador{
    especialidad : String;
    telefono : String;
    direccion : String;
    historial : String;
    constructor(especialidad : String, telefono : String, direccion : String, historial : String){
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.historial = historial;
    }
}

export const guardarReseña = new PersistentVector<Reseña>("v");
export const guardarUsuario = new PersistentVector<Usuario>("v");
export const guardarPrestador = new PersistentVector<Prestador>("v");