import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';
import SubscriptionsUser from '~/components/SubscriptionsUser';

import {Container, List} from './styles';

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
    }

    loadSubscriptions();
  }, []);

  async function handleSubscribe(id, past) {
    try {
      if (past) {
        Alert.alert(
          'Erro ao cancelar inscrição',
          'Este meetup já passou, você não pode mais cancelar a inscrição!'
        );
        return;
      }

      const response = await api.delete(`subscriptions/${id}`);

      if (response.status === 204) {
        Alert.alert(
          'Sucesso no cancelamento',
          'Sua inscrição foi cancelada com sucesso!'
        );
        setSubscriptions(
          subscriptions.filter(subscription => subscription.id !== id)
        );
      } else {
        Alert.alert(
          'Erro ao cancelar inscrição',
          'Algo deu errado, tente novamente mais tarde!'
        );
      }
    } catch (err) {
      Alert.alert(
        'Erro ao cancelar inscrição',
        'Algo de errado aconteceu, tente novamente mais tarde!'
      );
    }
  }

  return (
    <>
      <Header />
      <Background>
        <Container>
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <SubscriptionsUser
                onUnsubscribe={() => handleSubscribe(item.id, item.Meetup.past)}
                data={item}
              />
            )}
          />
        </Container>
      </Background>
    </>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
