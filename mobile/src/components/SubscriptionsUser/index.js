import React, {useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  BottomContainer,
  Title,
  InfoMeetup,
  SubscriptionButton,
  TextButton,
} from './styles';

export default function SubscriptionsUser({data, onUnsubscribe}) {
  const dateParsed = useMemo(() => {
    return format(
      parseISO(data.Meetup.date_and_hour),
      "d 'de' MMMM', às' HH'h'",
      {
        locale: pt,
      }
    );
  });

  return (
    <Container>
      <Banner
        source={{
          uri: data.Meetup.banner
            ? data.Meetup.banner.url.replace('localhost', '192.168.0.109') // por conta do android, tive que colocar este replace
            : 'https://ak1.ostkcdn.com//images/products/is/images/direct/7b6c3256bfe728cf81c9be8ec0d56b62da59571e/Title-Unavailable.jpghttps://miro.medium.com/max/1875/1*N7apzV1kuXhcRTMdDqHuAw.jpeg',
        }}
      />
      <BottomContainer>
        <Title>{data.Meetup.title}</Title>
        <InfoMeetup>
          <Icon name="event" size={14} color="#999999" />
          {dateParsed}
        </InfoMeetup>
        <InfoMeetup>
          <Icon name="room" size={14} color="#999999" />
          {data.Meetup.localization}
        </InfoMeetup>
        <InfoMeetup>
          <Icon name="person" size={14} color="#999999" />
          Organizador: {data.User ? data.User.name : 'Não informado'}
        </InfoMeetup>
        <SubscriptionButton onPress={onUnsubscribe}>
          <TextButton>Cancelar inscrição</TextButton>
        </SubscriptionButton>
      </BottomContainer>
    </Container>
  );
}
