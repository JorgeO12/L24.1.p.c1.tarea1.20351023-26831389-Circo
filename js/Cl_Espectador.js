export default class Cl_Espectador {
    constructor(Nombre, Edad, Sexo) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Sexo = Sexo;
    }
    set Edad(e) {
        this._Edad = +e;

    }
    get Edad() {
        return this._Edad;
    }
}