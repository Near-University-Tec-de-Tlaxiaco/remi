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

export class Prestador{
    nombrePrestador : String;
    walletPrestador : String;
    especialidad : String;
    telefono : String;
    direccion : String;
    historial : String;
    constructor(nombrePrestador : String,  walletPrestador : String, especialidad : String, telefono : String, 
        direccion : String, historial : String){
        this.nombrePrestador = nombrePrestador;
        this.walletPrestador = walletPrestador;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.historial = historial;
    }
}

export const ReseñarTodo = new PersistentVector<Reseña>("v");
export const guardarUsuario = new PersistentVector<Usuario>("v");
export const guardarPrestador = new PersistentVector<Prestador>("v");
