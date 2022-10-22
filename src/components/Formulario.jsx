import React from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import monedas from '../data/monedas';
import { useEffect, useState } from 'react';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .5s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7A7Dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const [ criptomonedas, setCriptoMonedas ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu moneda", monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas("Elige tu Criptomoneda", criptomonedas);
    useEffect( () => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=12&tsym=USD"
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arrayDeCriptos = resultado.Data.map( moneda => {
                const objetoCripto = {
                    id: moneda.CoinInfo.Name,
                    nombre: moneda.CoinInfo.FullName
                }
                return objetoCripto
            })
            setCriptoMonedas(arrayDeCriptos);
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Enviando");
        if([moneda, criptomoneda].includes("")){
            setError(true)
            return
        }
        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        })
    }
    
    return ( 
        <>
            { error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCriptomoneda/>   
                <InputSubmit
                    type="submit"
                    value="cotizar"
                />
            </form>
        </>
  )
}

export default Formulario