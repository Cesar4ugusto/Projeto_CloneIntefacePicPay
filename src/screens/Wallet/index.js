import React, { useState } from 'react'
import { Switch, ScrollView } from 'react-native'

import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import { Action, ActionLabel, Actions, AddButton, AddLabel, BalaceContainer, Bold, Card, CardBody, CardDetails, CardInfo, CardTitle, Container, EyeButton, Header, HeaderContainer, Image, Info, PaymentMethods, PaymentMethodsTitle, Title, UseBalance, UseBalanceText, UseTicketButton, UseTicketContainer, UseTicketLabel, Value, Wrapper } from './styles'

import creditCard from '../../images/credit-card.png'

export default function Wallet() {

    const [ isVisible, setIsVisible ] = useState(true)
    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState)
    }
    
    const [ useBalance, setuseBalance ] = useState(true)
    function handleToggleUseBalance() {
        setuseBalance((prevState) => !prevState)
    }

    return (
        <Wrapper>
            <Container>
                <Header colors={ useBalance ? ['#52e78c', '#1ab563'] : ['#D3D3D3', '#868686']}>
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>
                        <BalaceContainer>
                            <Value>
                                R$ <Bold>{ isVisible ? '0,00' : '----' }</Bold>
                            </Value>
                            <EyeButton onPress={ handleToggleVisibility }>
                                <Feather name={ isVisible ? 'eye' : 'eye-off' } size={28} color="#fff" />
                            </EyeButton>
                        </BalaceContainer>
                        <Info>Seu saldo está rendendo 100% do CDI</Info>
                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>
                            <Action>
                                <FontAwesome name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>
                <UseBalance>
                    <UseBalanceText>
                        Usar saldo ao pagar
                    </UseBalanceText>
                    <Switch value={ useBalance } onValueChange={ handleToggleUseBalance } />
                </UseBalance>
                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de Pagamento
                    </PaymentMethodsTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                                <CardInfo>Cadatre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
                            </CardDetails>
                            <Image source={ creditCard } resizeMode="contain" />
                        </CardBody>
                        <AddButton>
                            <AntDesign name="pluscircleo" size={40} color="#0db060" />
                            <AddLabel>Adicionar cartão de crédito</AddLabel>
                        </AddButton>
                    </Card>
                    <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                            <UseTicketLabel>Usar código promocional</UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}