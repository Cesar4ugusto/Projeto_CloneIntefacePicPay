import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 30px;
    padding: 0 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const ActivitiesContainer = styled.View`
    flex-direction: row;
`;

export const ActivitiesSingle = styled.Text`
    color: #10c86e;
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
`;

export const Avatar = styled.Image``;

export const Card = styled.View`
    background: #9e9e9e;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Bold= styled.Text`
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;

export const CardBody = styled.View`
    margin-top: 10px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const CardFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 15px;
    background: rgba(255,255,255,0.4);
    margin: 0 10px;
`;

export const Date = styled.Text`
    color: #fff;
    margin-left: 8px;
`;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
`;

export const OptionLabel = styled.Text`
    margin: 0 6px;
    color: #fff;
    font-size: 14px;
`;