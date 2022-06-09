import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardInfo = styled.View`
  width: 380px;
  height: 490px;
  background: #595d65;
  border: 1px solid #777a81;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  height: 100px;
`;

export const TitleContainer = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 330px;
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 50px;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  background: transparent;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-left: 50px;
`;

export const InfosContainer = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InfoAbout = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 26px;
`;

export const About = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;

export const FooterCard = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;

  height: 100px;
  margin-top: auto;
`;


export const ButtonInfoEp = styled.TouchableOpacity`
  background: transparent;
`

// 