export default class Cl_Circo {
    constructor() {
        this.cntEspectadores = 0
        this.cntNinos = 0
        this.cntAdolescentes = 0
        this.cntAdultos = 0
        this.ventaNinos = 0
        this.ventaAdolescentes = 0
        this.ventaAdultos = 0
    }
procesarEspectador(e) {
    this.cntEspectadores++;
    if (e.Edad <= 12) {
        this.ventaNinos = 15*0.9 ;
        this.cntNinos++;
    } else if (e.Edad > 12 && e.Edad <= 18) {
        this.ventaAdolescentes = 15*0.9;
        this.cntAdolescentes++;
    } else if (e.Edad > 18) {
        this.ventaAdultos = 15 ;
        this.cntAdultos++;
    }
}
calcularPromVentasAdolescentes() {
    return this.ventaAdolescentes / this.cntAdolescentes  ; 
}
calcularEntreNinosyAdolescentes() {
    if (this.cntNinos > this.cntAdolescentes) {
        return "Niños";
    }
    else if (this.cntNinos < this.cntAdolescentes) {
        return "Adolescentes";
    }    
}
calcularPorcentajeNinosAsistieron() {
    return (this.cntNinos / this.cntEspectadores) * 100;
} 
}