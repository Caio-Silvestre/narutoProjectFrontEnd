import narutoLogo from "../../assets/logoNaruto.svg"
import iconClose from "../../assets/PergaminhoIconFechado.svg"
import iconOpen from "../../assets/PergaminhoIconAberto.svg"
import iconPergaminhos from "../../assets/PergaminhoIconSvg.svg"

import { HeaderDiv } from "./style"

// ==========IMPORTS=======================================================================================================================================

function Header (){

    return(
        <HeaderDiv>
           
            <img src={narutoLogo} alt="Naruto" className="logoNaruto"/>
            <div className="buttonsMenuDiv">
                <div className="buttonMenuDiv">
                    <button>
                    <img src={iconClose} alt="" className="iconScroll"/>
                    Shinobis
                    </button>
                </div>
                <div >
                    <button>
                    <img src={iconClose} alt="" className="iconScroll"/>
                    Clans
                    </button>
                </div>
            </div> 
        
        
        </HeaderDiv>
    )
}

export default Header