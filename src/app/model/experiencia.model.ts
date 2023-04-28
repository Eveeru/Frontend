export class Experiencia {
id?: number;
trabajo: string;
puesto: string;
descripcion_exp: string;
periodo_exp: string;
img_exp: string;
personaid: number;

constructor(trabajo: string, puesto: string, descripcion_exp: string, periodo_exp: string, imagen_exp: string, personaid: number) {
    this.trabajo = trabajo;
    this.puesto = puesto;
    this.descripcion_exp = descripcion_exp;
    this.periodo_exp = periodo_exp;
    this.img_exp = imagen_exp
    this.personaid = personaid;
}
}