export class Persona {
    id?:number;
    nombre:string;
    apellido:string;
    presentacion: string;
    tituloperfil:string;
    imagen:string;

    constructor(nombre:string, apellido:string, presentacion:string, tituloperfil:string, imagen:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.presentacion = presentacion;
        this.tituloperfil = tituloperfil;
        this.imagen = imagen;
    }
}