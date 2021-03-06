import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #616161;
    height: 130px;
    margin-top: 10px;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 10px;
    align-items: center;
`;
