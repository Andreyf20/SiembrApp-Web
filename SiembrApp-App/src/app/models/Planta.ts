export interface Planta{

    nombreComun: string;
    nombreCientifico: string;
    familia: string;
    origen: string;
    fenologia: string;
    agentePolinizador: string;
    requerimientosDeLuz: string;
    metodoDispersion: string;
    fruto: string;
    texturaFruto: string;
    flor: string;
    habito: string;
    usosConocidos;paisajeRecomendado: Array<String>;
    minRangoAltitudinal: number;
    maxRangoAltitudinal: number;
    metros: number;

}