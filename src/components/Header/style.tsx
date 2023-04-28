import styled from "styled-components";
import bgHeader from "../../assets/headerBg2.svg"

// ==========IMPORTS=======================================================================================================================================


export const HeaderDiv = styled.div`
    
    width: 100vw;
    padding: 0.3em;
    padding-right: 1em;
    padding-left: 1em;
    border-bottom: 5px solid var(--brand2);
    
    background-image: url(${bgHeader});
    background-size: contain;
    /* background-color: #2e5244;   */

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoNaruto{
        height: 3em;
    
    }
    .buttonsMenuDiv{
        display: flex;
        gap: 2em;
        button{
          background: none;
          border: none;
          display: flex;
          align-items: center;
          flex-direction: column;
          img{
            height: 3em;
          }
        }
    }
        .iconScroll{
            height: 3em;
        }
`