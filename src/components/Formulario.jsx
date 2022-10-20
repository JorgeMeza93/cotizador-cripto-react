import React from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';

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
    &:hover{
        background-color: #7A7Dfe;
        cursor: pointer;
    }
`

const Formulario = () => {
    const monedas = [
        {id: "USD", nombre: "Dolar Estadounidense"},
        {id: "EUR", nombre: "Euro"},
        {id: "ARS", nombre: "Peso Argentino"},
        {id: "BRL", nombre: "Real Brasileño"},
        {id: "MXN", nombre: "Peso Mexicano"}
    ]

    const [ SelectMonedas ] = useSelectMonedas("Elige tu moneda");    
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