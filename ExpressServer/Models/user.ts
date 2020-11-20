export class User {
    nombre: string;
    correo: string;
    contrasenna: string;
    trabajaasada: boolean;
    ubicacion: string;

    constructor(nombre: string, correo: string, contrasenna: string, trabajaasada: boolean = false, ubicacion: string){
        this.nombre = nombre;
        this.correo = correo;
        this.contrasenna = contrasenna;
        this.trabajaasada = trabajaasada;
        this.ubicacion = ubicacion
    }
}