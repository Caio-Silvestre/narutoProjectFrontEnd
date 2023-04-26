import { ReactNode } from "react"


export interface ICharacterProviderProps {
    children : ReactNode;
}

export interface ICharacterContextPops {
    characters: ICharacter[]
    character: ICharacter
    loadCharacters: boolean
    loadCharacter: boolean
    getAllCharacters: () => void
    getAllCharactersId: (id:number) => void
}

export interface ICharacter {
    about: [],
    info: {
        Sexo: string,
        Aniversário: string,
        Idade: string,
        Altura: string,
        Peso: string,
        TipoSanguíneo: string,
        Ocupação: string,
        Afiliação: string,
        Parceiro: string,
        PatenteNinja: string,
        RegistroNinja: string
    },
    page: string,
    name: string,
    id: number,
    images: [],
}