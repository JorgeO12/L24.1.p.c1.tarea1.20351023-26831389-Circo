/**Para un espectáculo de circo se tienen 3 tipos de entrada: 
 * niños (hasta 12 años), adolescentes (hasta 18) y adultos (mayores de 18, respectivamente), 
 *el precio de la entrada general es de 15$. Por cada espectador se tiene: 
 *nombre, edad y sexo. Además, se sabe que si el espectador es niño o adolescente 
 *obtiene un descuento del 10%. Se requiere mostrar: 
 *a) Precio Cancelado por cada espectador, 
 *b) Promedio de las Ventas hechas a espectadores adolescentes, 
 *c) Entre niños y adolescentes cuál asistió más al circo, 
 *d) Porcentaje que representa la cantidad de niños que asistieron al circo con respecto 
 *al total de espectadores procesados.
 *El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre, edad, sexo) 
 *(Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M), según lo cual la salida 
    *El espectador Ana debe cancelar 13.5$
    *El espectador Luis debe cancelar 13.5$
    *El espectador Valeria debe cancelar 13.5$
    *El espectador Fabián debe cancelar 15.0$
    *Promedio de las Ventas hechas a espectadores adolescentes 13.5 
    *Entre niños y adolescentes el espectador que asistió más al circo fue Niños 
    *Porcentaje que representa la cantidad de niños que asistieron al circo 50% 
 * 
 */

import Cl_Circo from "./Cl_Circo.js";
import Cl_Espectador from "./Cl_Espectador.js";

let Espec1 = new Cl_Espectador("Ana", 8, "F");
let Espec2 = new Cl_Espectador("Luis", 15, "M");
let Espec3 = new Cl_Espectador("Valeria", 12, "F");
let Espec4 = new Cl_Espectador("Fabian", 21, "M");

let circo = new Cl_Circo();

circo.procesarEspectador(Espec1);    
circo.procesarEspectador(Espec2);    
circo.procesarEspectador(Espec3);    
circo.procesarEspectador(Espec4);   

let salida = document.getElementById("salida");
salida.innerHTML = `
    <br>El espectador Ana debe cancelar ${circo.ventaNinos}$ 
    <br>El espectador Luis debe cancelar ${circo.ventaAdolescentes}$
    <br>El espectador Valeria debe cancelar ${circo.ventaNinos}$
    <br>El espectador Fabián debe cancelar ${circo.ventaAdultos}$ 
    </p>Promedio de las Ventas hechas a espectadores adolescentes: ${circo.calcularPromVentasAdolescentes()}
    <br>Entre Niños y Adolescentes cuál asistió más al circo: ${circo.calcularEntreNinosyAdolescentes()}
    <br>Porcentaje que representa la cantidad de niños que asistieron al circo con respecto al total de espectadores procesados: ${circo.calcularPorcentajeNinosAsistieron()}%
    `
