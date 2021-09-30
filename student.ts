export class Student {
    codigo: number;
    cedula: number;
    edad: number;
    direccion: String;
    telefono: number;
  
    constructor( codigo: number,cedula: number, edad: number,direccion: String,telefono: number){
        this.codigo= codigo;
        this.cedula= cedula;
        this.edad= edad;
        this.direccion= direccion;
        this.telefono=telefono;
    }
   
  }