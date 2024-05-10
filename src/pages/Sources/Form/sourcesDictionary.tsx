import SourcesCategory from "../types/SourcesCategory";
import SourcesType from "../types/SourcesType";
const sourcesDictionaryPrueba2:SourcesType[]=[
    {
        id: 1,
        categoryName: "Fuentes Fijas",
        name: "Calderas",
        description: "Descripción de las calderas",
        state: false,
    },
    {
        id: 2,
        categoryName: "Fuentes Fijas",
        name: "Hornos",
        description: "Descripción de los hornos",
        state: false,
    },
    {
        id: 3,
        categoryName: "Fuentes Fijas",
        name: "Turbinas",
        description: "Descripción de las turbinas",
        state: false,
    },
    {
        id: 4,
        categoryName: "Fuentes Móviles",
        name: "Vehículos Terrestres",
        description: "Motos, automóviles, camionetas, montacargas, buses, furgones etc.",
        state: false,
    },
    {
        id: 5,
        categoryName: "Fuentes Móviles",
        name: "Vehículos Aéreos",
        description: "Helicópteros, aviones",
        state: false,
    },
    {
        id: 6,
        categoryName: "Fuentes Móviles",
        name: "Vehículos Marinos",
        description: "Lanchas, barcos",
        state: false,
    },
    {
        id: 7,
        categoryName: "Procesos Físicos o Químicos",
        name: "Procesamiento de Materiales y Químicos",
        description: "Descripción del procesamiento de materiales y químicos",
        state: false,
    },
    {
        id: 8,
        categoryName: "Procesos Agrícolas",
        name: "Cabezas de Ganado Vacuno",
        description: "Descripción de las cabezas de ganado vacuno",
        state: false,
    },
    {
        id: 9,
        categoryName: "Procesos Agrícolas",
        name: "Cabezas de Ganado Porcino",
        description: "Descripción de las cabezas de ganado porcino",
        state: false,
    },
    {
        id: 10,
        categoryName: "Procesos Agrícolas",
        name: "Agroquímicos",
        description: "Descripción de los agroquímicos",
        state: false,
    },
    {
        id: 11,
        categoryName: "Gases Refrigerantes",
        name: "Equipos Asociados Cuartos Fríos",
        description: "Descripción de los equipos asociados a cuartos fríos",
        state: false,
    },
    {
        id: 12,
        categoryName: "Gases Refrigerantes",
        name: "Equipos Asociados Neveras",
        description: "Descripción de los equipos asociados a neveras",
        state: false,
    },
    {
        id: 13,
        categoryName: "Gases Refrigerantes",
        name: "Equipos Asociados Aires Acondicionados",
        description: "Descripción de los equipos asociados a aires acondicionados",
        state: false,
    },
    {
        id: 14,
        categoryName: "Tratamiento de Residuos",
        name: "Plantas de Tratamiento",
        description: "Descripción de las plantas de tratamiento",
        state: false,
    },
]
const sourcesDictionaryPrueba = [
    {
        id: 1,
        name: "Fuentes Fijas",
        sources: [
            { id: 1, name: "Calderas", description: "Descripción de las calderas", state: false },
            { id: 2, name: "Hornos", description: "Descripción de los hornos", state: false },
            { id: 3, name: "Turbinas", description: "Descripción de las turbinas", state: false }
        ]
    },
    {
        id: 2,
        name: "Fuentes Móviles",
        sources: [
            { id: 4, name: "Vehículos Terrestres", description: "Motos, automóviles, camionetas, montacargas, buses, furgones etc.", state: false },
            { id: 5, name: "Vehículos Aéreos", description: "Helicópteros, aviones", state: false },
            { id: 6, name: "Vehículos Marinos", description: "Lanchas, barcos", state: false }
        ]
    },
    {
        id: 3,
        name: "Procesos Físicos o Químicos",
        sources: [
            { id: 7, name: "Procesamiento de Materiales y Químicos", description: "Descripción del procesamiento de materiales y químicos", state: false }
        ]
    },
    {
        id: 4,
        name: "Procesos Agrícolas",
        sources: [
            { id: 8, name: "Cabezas de Ganado Vacuno", description: "Descripción de las cabezas de ganado vacuno", state: false },
            { id: 9, name: "Cabezas de Ganado Porcino", description: "Descripción de las cabezas de ganado porcino", state: false },
            { id: 10, name: "Agroquímicos", description: "Descripción de los agroquímicos", state: false }
        ]
    },
    {
        id: 5,
        name: "Gases Refrigerantes",
        sources: [
            { id: 11, name: "Equipos Asociados Cuartos Fríos", description: "Descripción de los equipos asociados a cuartos fríos", state: false },
            { id: 12, name: "Equipos Asociados Neveras", description: "Descripción de los equipos asociados a neveras", state: false },
            { id: 13, name: "Equipos Asociados Aires Acondicionados", description: "Descripción de los equipos asociados a aires acondicionados", state: false }
        ]
    },
    {
        id: 6,
        name: "Tratamiento de Residuos",
        sources: [
            { id: 14, name: "Plantas de Tratamiento", description: "Descripción de las plantas de tratamiento", state: false }
        ]
    }
];

export {sourcesDictionaryPrueba, sourcesDictionaryPrueba2};
