import styled from "styled-components";
import OpenScroll from "../../../assets/PergaminhoABertoMenu.svg"

// ==========IMPORTS=======================================================================================================================================




export const Main = styled.main`
    height: 100vh;
    width: 100vw;

    padding-top: 0.3em;
    
    
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    
    .menuScroll{
        width: 100%;
        height: 100%;
        
        background-image: url(${OpenScroll});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
 
        .logoNaruto{
            width: 13em;
            margin: 0;
            padding: 0;
    
        }
        
        
        
        h1{
            font-family: var(--principal-font);
            font-size: 1.5em;
            margin-top: 0.9em;
            width: 60%;
            text-align: center;
        }
        h2{
            font-family: var(--principal-font);
            font-size: 1.5em;
            margin-top: 0.2em;
            width: 60%;
            text-align: center;
        }
        .buttonsMenuDiv{
        margin-top: 2em;
        display: flex;
        gap: 4em;
            button{
            background: none;
            border: none;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 1.3em;
            img{
                height: 8em;
            }
            img:hover{
             position: absolute;
             height: 10em;
            }
            }
            
        
            
        }
    }
    @media (min-width: 1130px) {
        .menuScroll{

            /* h1,h2{
                width: 20%;
            } */

            .buttonsMenuDiv{

                /* button{
                    font-size: 30px;
                } */
            }
        }
    }
`