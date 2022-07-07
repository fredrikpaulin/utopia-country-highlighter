import React from 'react'
import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-grow: 0;
    align-self: stretch;

    & > div.country_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        max-width: 100%;
        gap: 16px 20px;

        & > div.country {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            font-size: 16px;
            line-height: 20px;

            &[data-selected="true"] {
                color: var(--utopia-primary-color);
            }
        }
    }
`

const CountryList = ({countries, selectedCountries, handleCountryClick}) => {
    return(
        <Container>
            <div className="country_list">
                {countries.map((country:any) => {
                    return(
                        <div key={country.alpha3Code} className="country" onClick={() => {handleCountryClick(country.alpha3Code)}} data-selected={selectedCountries.includes(country.alpha3Code)}>
                            {country.name}
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default CountryList