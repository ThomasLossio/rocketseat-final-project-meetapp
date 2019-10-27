import React, {useEffect, useState, useMemo} from 'react';
import {Alert} from 'react-native';
import {format, subDays, addDays} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {Container, HeaderDashboard, TextHeader, List} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {date},
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", {locale: pt}),
    [date]
  );

  async function handleSubscribe(id, past) {
    try {
      if (past) {
        Alert.alert(
          'Erro ao se inscrever',
          'Este meetup não está mais disponível para inscrição!'
        );
        return;
      }

      await api.post('subscriptions', {
        meetup_id: id,
      });

      setMeetups(meetups.filter(meetup => meetup.id !== id));
      Alert.alert(
        'Inscrição realizada',
        'Sua inscrição foi realizada com sucesso!'
      );
    } catch (err) {
      Alert.alert(
        'Erro ao se inscrever',
        'Algo de errado aconteceu, tente novamente mais tarde!'
      );
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <>
      <Header />
      <Background>
        <Container>
          <HeaderDashboard>
            <Icon
              name="chevron-left"
              size={30}
              color="#FFF"
              onPress={handlePrevDay}
            />
            <TextHeader>{dateFormatted}</TextHeader>
            <Icon
              name="chevron-right"
              size={30}
              color="#FFF"
              onPress={handleNextDay}
            />
          </HeaderDashboard>
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Meetup
                onSubscribe={() => handleSubscribe(item.id, item.past)}
                data={item}
              />
            )}
          />
        </Container>
      </Background>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={20} color={tintColor} />,
};
