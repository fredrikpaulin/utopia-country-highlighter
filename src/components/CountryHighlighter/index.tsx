import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'

import ContinentSelector from '../ContinentSelector'
import CountryList from '../CountryList'

const CSContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 545px;
    gap: 45px;
    margin: 0 auto;
    padding: 60px 0;

    & > h2 {
        font-size: 25px;
        line-height: 1.2;
        text-align: center;
    }

    & > main {
        max-width:475px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`
interface State {
    loading: boolean,
    continents: string[],
    countries: string[],
    selectedContinent: string,
    selectedCountries: string[]
}

interface Action {
    type: string,
    payload: any
}

const CountryHighlighter = () => {
    const initialState : State = {
        loading: true,
        continents: ['Asia', 'Africa', 'Americas', 'Oceania', 'Europe'],
        countries: [],
        selectedContinent: '',
        selectedCountries: []
    }
    const Reducer = (state:State, action:Action) => {
        switch (action.type) {
            case 'TOGGLE_LOADING':
                return {
                    ...state,
                    loading: !state.loading
                }
            case 'SET_COUNTRIES':
                return {
                    ...state,
                    loading: false,
                    countries: action.payload
                }
            case 'SET_SELECTED_COUNTRIES':
                return {
                    ...state,
                    selectedCountries: action.payload
                }
            case 'SET_CONTINENT':
                return {
                    ...state,
                    selectedContinent: action.payload,
                    selectedCountries: []
                }

            default: return {...state}
        }
    }
    const [state, dispatch] = useReducer(Reducer, initialState)

    useEffect(() => {
        let ignore:boolean = (state.countries.length !== 0)
        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () => {
            const url: string = 'https://api.countries.code-test.utopiamusic.com/all'
            try {
                const results = await fetch(url, {signal})
                const data = await results.json()
                dispatch({type: 'SET_COUNTRIES', payload: data})
            } catch (error) {
                console.log(error)
            }
        }
        
        !ignore && fetchData()
 
        return () => {
            controller.abort()
        }

    }, [])

    return(
        <CSContainer>
            <h2>Select the region and click on<br /> the countries that you want to highlight</h2>
            <main className="country_highlighter__main">
                <ContinentSelector 
                    continents={state.continents}
                    selectedContinent={state.selectedContinent} 
                    cb={((retVal:string) => {dispatch({type: 'SET_CONTINENT', payload: retVal})})} />
                <CountryList 
                    countries={state.countries.filter((country:any) => country.continent === state.selectedContinent)} 
                    selectedCountries={state.selectedCountries}
                    handleCountryClick={(country:string) => {
                        if (state.selectedCountries.includes(country)) {
                            dispatch({type: 'SET_SELECTED_COUNTRIES', payload: state.selectedCountries.filter((c:string) => c !== country)})
                        } else {
                            dispatch({type: 'SET_SELECTED_COUNTRIES', payload: [...state.selectedCountries, country]})
                        }
                    }}
                />
            </main>
        </CSContainer>
    )
}

export default CountryHighlighter