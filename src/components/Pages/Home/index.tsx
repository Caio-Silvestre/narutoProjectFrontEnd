import { useContext } from "react"
import { CharacterContext } from "../../../contexts/characterContext"
import iconPergaminhos from "../../../assets/PergaminhoIconSvg.svg"
import Header from "../../Header"

import iconClose from "../../../assets/PergaminhoIconFechado.svg"
import iconOpen from "../../../assets/PergaminhoIconAberto.svg"
import narutoLogo from "../../../assets/logoNaruto.svg"

import { Main } from "./style"
import { useNavigate } from "react-router-dom"

// ==========IMPORTS=======================================================================================================================================

function Home(){
    const {characters,character, getAllCharacters, getAllCharactersId} = useContext(CharacterContext)
    const nav = useNavigate()
    
    return(
        
        <Main>
            <div className="menuScroll">
                <img src={narutoLogo} alt="Naruto" className="logoNaruto"/>
                <h1>Bem-Vindo a enciclopédia Shinobi</h1>
                <h2>Toda informação do mundo ninja de Naruto em um só lugar.<br/> O que deseja estudar hoje?</h2>
                
                <div className="buttonsMenuDiv">
                        <button onClick={()=> nav("/shinobis")}>
                        Shinobis
                        <img src={iconClose} alt="" className="iconScroll"/>
                        </button>   
                <div >
                    <button onClick={()=> nav("/clans")}>
                    Clans
                    <img src={iconClose} alt="" className="iconScroll"/>
                    </button>
                </div>
            </div> 
            </div>
        </Main>
        
    )
}
export default Home