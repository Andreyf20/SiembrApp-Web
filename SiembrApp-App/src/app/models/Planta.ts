export interface Fenologia{
    nombre: string;
}

export interface Familia{
    nombre: string;
}

export interface Planta{

    nombrecomun: string;
    nombrecientifico: string;
    familia: string;
    origen: string;
    fenologia: string;
    polinizador: string;
    requerimientosdeluz: string;
    metododispersion: string;
    frutos: string;
    texturafruto: string;
    flor: string;
    habito: string;
    usosconocidos: string;
    paisajerecomendado: string;
    minrangoaltitudinal: number;
    maxrangoaltitudinal: number;
    metros: number;

}
