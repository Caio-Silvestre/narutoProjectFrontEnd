import { createContext, useState, useEffect, ReactNode } from "react"
import { api } from "../service/api"
import { useNavigate } from "react-router-dom";
import { ICharacterProviderProps, ICharacter, ICharacterContextPops } from "../interfaces/characterIntefaces";

// ==========IMPORTS=======================================================================================================================================

export const CharacterContext = createContext<ICharacterContextPops>( {} as ICharacterContextPops);

const CharacterProvider = ({children}: ICharacterProviderProps) => {
    const [characters, setCharacters] = useState<ICharacter[]>([] as ICharacter[])
    const [character, setCharacter] = useState<ICharacter>({} as ICharacter)
    const [loadCharacters, setLoadCharacters] = useState<boolean>(false)
    const [loadCharacter, setLoadCharacter] = useState<boolean>(false)

    //All Characters
    const getAllCharacters = async () => {
        await api
        .get("characters")
        .then((res) => {
            setCharacters(res.data)
            setLoadCharacters(true)
        })
        .catch((err) => console.log(err))
    }
      //Character por Id
      const getAllCharactersId = async (id:number) => {
        await api
        .get(`characters/${id}`)
        .then((res) => {
            setCharacter(res.data)
            setLoadCharacter(true)
        })
        .catch((err) => console.log(err))
    }

return (
    <CharacterContext.Provider value = {{characters, character, loadCharacters,loadCharacter, getAllCharacters,getAllCharactersId}}>
        {children}
    </CharacterContext.Provider>
)
}
export default CharacterProvider