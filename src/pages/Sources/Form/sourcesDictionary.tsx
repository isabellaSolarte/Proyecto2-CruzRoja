import SourcesCategory from "../types/SourcesCategory";

const sourcesDictionaryPrueba: SourcesCategory[] = [
    {
        id: 1,
        name: "Fuentes Fijas",
        sources: [
            { id: 1, name: "Calderas", state: false },
            { id: 2, name: "Hornos", state: false },
            { id: 3, name: "Turbinas", state: false }
        ]
    },
    {
        id: 2,
        name: "Fuentes Móviles",
        sources: [
            { id: 4, name: "Vehículos Terrestres", state: false },
            { id: 5, name: "Vehículos Aéreos", state: false },
            { id: 6, name: "Vehículos Marinos", state: false }
        ]
    },
    {
        id: 3,
        name: "Procesos Físicos o Químicos",
        sources: [
            { id: 7, name: "Procesamiento de Materiales y Químicos", state: false }
        ]
    },
    {
        id: 4,
        name: "Procesos Agrícolas",
        sources: [
            { id: 8, name: "Cabezas de Ganado Vacuno", state: false },
            { id: 9, name: "Cabezas de Ganado Porcino", state: false },
            { id: 10, name: "Agroquímicos", state: false }
        ]
    },
    {
        id: 5,
        name: "Gases Refrigerantes",
        sources: [
            { id: 11, name: "Equipos Asociados Cuartos Fríos", state: false },
            { id: 12, name: "Equipos Asociados Neveras", state: false },
            { id: 13, name: "Equipos Asociados Aires Acondicionados", state: false }
        ]
    },
    {
        id: 6,
        name: "Tratamiento de Residuos",
        sources: [
            { id: 14, name: "Plantas de Tratamiento", state: false }
        ]
    }
];

export {sourcesDictionaryPrueba};
