import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #aaa;
  z-index: 1;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

 
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 60px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-left: 50px;
`;

export const TitleEpisode = styled.Text`
  color: #2f3646;
  font-size: 22px;
  margin-left: 50px;
  text-align: center;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-bottom: 50px;
`;

export const CardInfo = styled.View`
  width: 380px;
  height: 650px;
  background: #443B7B;
  border: 1px solid #777a81;
  margin-bottom: 15px;
  border-radius: 8px;
  margin-top: 120px;
  padding: 20px;
`;

export const CharactersList = styled(FlatList).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 20px 20px;
  margin-bottom: 0px;
`;

export const CharactersContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const InfosContainer = styled.View`

  width: 300px;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  padding: 12px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
`;

export const DescriptionTitle = styled.Text`
  color: #222;
  font-size: 16px;
  margin-right: 5px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 15px;
 
`;

export const Status = styled.Text`
  font-size: 8px;
  
  text-align: center;
  margin-right: 5px;
`;
