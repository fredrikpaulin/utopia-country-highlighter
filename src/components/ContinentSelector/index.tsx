import React from 'react'
import styled from "styled-components"

const CSContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;

    & > div.continents {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 16px 50px;

        & > button {
            font-size: 20px;
            width: 125px;
            height: 50px;
            background: #fff;
            border: 1px solid #000;
            border-radius: 8px;
            
            &[data-selected="true"] {
                border: 1px solid var(--utopia-primary-color);
                color: var(--utopia-primary-color);
            }
        }
    }
`

const ContinentSelector = ({continents, cb, selectedContinent}) => {
    return(
        <CSContainer>
            <div className="continents">
                {continents.map((continent:string) => {
                    return(
                        <button 
                            type="button" 
                            key={continent} 
                            data-selected={selectedContinent === continent}
                            onClick={() => cb(continent)}>{continent}</button>
                    )
                })}
            </div>
        </CSContainer>
    )
}

export default ContinentSelector