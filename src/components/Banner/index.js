import React from 'react';

import { Container, Description, Details, Image, Title } from './styles';

import img13 from '../../images/13.png'

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>Manteha suas parcerias em dia, use o picpay para fazer suas cobranças!</Description>
            </Details>
            <Image source={ img13 } />
        </Container>
    )
}
