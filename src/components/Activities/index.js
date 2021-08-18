import React from 'react';

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { 
    Actions,
    ActivitiesContainer, 
    ActivitiesSingle, 
    Avatar, 
    Bold, 
    Card, 
    CardBody,
    CardFooter, 
    CardHeader, 
    Container, 
    Date,
    Description, 
    Details,
    Divider,
    Header, 
    Option,
    OptionLabel,
    Title,
    UserName,
    Value,
} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
                <ActivitiesContainer>
                    <ActivitiesSingle>Todas</ActivitiesSingle>
                    <ActivitiesSingle>Minhas</ActivitiesSingle>
                </ActivitiesContainer>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={ avatar } />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@laescalima</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Cesar Augusto</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        
                        <Feather name="lock" color="#fff" size={14} />
                        <Date>há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
