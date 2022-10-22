import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`;
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`;
const Imagen = styled.img`
    display: block;
    width: 140px;
`


const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTURL, LASTUPDATE} = resultado;
    return(
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt={"logo de resultado"}/>
        <div>
            <Precio>Precio Actual: <span>{PRICE}</span></Precio>
            <Texto>Precio máximo del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio m´nimo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación de las últimas 24 horas {""}<span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}


export default Resultado