import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  justify-content: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 4px;
`;

export const BottomContainer = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`;

export const InfoMeetup = styled.Text`
  font-size: 13px;
  margin-bottom: 7px;
  color: #999;
`;

export const SubscriptionButton = styled.TouchableOpacity`
  height: 46px;
  background: #f94d6a;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
