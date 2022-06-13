import {logging, PersistentVector} from "near-sdk-as";
import {guardarReseña, Reseña, guardarPrestador, Prestador, guardarUsuario, Usuario} from "../model"
import {setReseña, getReseña, deleteReseña, tamañoReseña, getTodasReseñas, getUsuarios, setPrestador} from ".."
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

const usuarioInd = guardarUsuario.length;
const contsData = new Array<Usuario>(usuarioInd);
for(let x = 0; x < usuarioInd; x++) {
  contsData[x] = guardarUsuario[x]
}
describe("Obtener numero de Usuarios", () => {
  it('No hay usuarios, o existe un error', () => {
      expect(getUsuarios()).toStrictEqual(contsData)
  })
})
  
const especialidad = 'Carpintero';
const telefono = '9531585254';
const direccion = 'Calle Girasol #6';
const historial = '4 trabajos hechos';
  
let prestadorEjemplo = new Prestador(especialidad, telefono, direccion, historial);
  
describe("Guardar al Prestador", () => {
  it('No se guardo debido a un error', () => {
    expect(setPrestador('Carpintero', '9531585254', 'Calle Girasol #6', '4 trabajos hechos')).toStrictEqual
      (prestadorEjemplo);
  })
})