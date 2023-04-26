import logo from "../../assets/logoNaruto.png"

// ==========IMPORTS=======================================================================================================================================

function Header (){

    return(
        <div>
            <img src={logo} alt="Naruto"/>
            <div>
                <button>
                    Shinobis
                </button>
                <button>
                    Clans
                </button>
            </div>
        </div>
    )
}

export default Header