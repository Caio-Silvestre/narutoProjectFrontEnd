import { useContext } from "react"
import { CharacterContext } from "../../../contexts/characterContext"
import Global from "../../../styles/global"

// ==========IMPORTS=======================================================================================================================================

function Home(){
    const {characters,character, getAllCharacters, getAllCharactersId} = useContext(CharacterContext)
    
    
    return(
        <div>
               
            <h1>Olá Shinobi!</h1>
            <div>
                <button>
                    Shinobis
                </button>
                <button>
                    Clans
                </button>
            </div>
            {/* {characters.map((char) =>{
                
                return(<div>
                    <h1>{char.name}</h1>
                    
                    </div>
                )
            })} */}
        </div>
    )
}
export default Home