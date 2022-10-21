import React from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import monedas from '../data/monedas';
import { useEffect, useState } from 'react';

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

const Formulario = () => {
    const [ criptomonedas, setCriptoMonedas ] = useState([]);
    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu moneda", monedas);
    const [ criptomoneda, setCriptomoneda ] = useSelectMonedas("Elige tu Criptomoneda");
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
    return (
    <form>
        <SelectMonedas/>
        <InputSubmit
            type="submit"
            value="cotizar"
        />
    </form>
  )
}

export default Formulario