import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import DateTimeInput from './DateTimeInput';
import BannerInput from './BannerInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date_and_hour: Yup.date()
    .min(new Date(), 'Não é possível cadastrar datas passadas')
    .required('Data é obrigatório'),
  localization: Yup.string().required('Localização é obrigatório'),
  banner_id: Yup.number(),
});

export default function MeetupEditAdd({ match }) {
  const { id } = match.params;
  const profile = useSelector(state => state.user.profile);
  const [meetup, setMeetup] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(meetup.description);
  }, [meetup]);

  useEffect(() => {
    async function isEditing() {
      if (!id) {
        return;
      }

      const response = await api.get(`organizing/${id}`);

      const { data } = response;
      const date_and_hour = parseISO(data.date_and_hour);

      setMeetup({ ...data, date_and_hour });
    }

    isEditing();
  }, [id]);

  async function handleSubmit(data) {
    if (id) {
      try {
        await api.put(`meetups/${id}`, data);
        toast.success('Meetup editado com sucesso!');
      } catch (err) {
        toast.error('Algo deu errado, tente novamente mais tarde!');
      }
    } else {
      try {
        await api.post('meetups', {
          ...data,
          user_id: profile.id,
        });
        toast.success('Meetup criado com sucesso!');
      } catch (err) {
        toast.error('Algo deu errado, tente novamente mais tarde!');
      }
    }
    history.push('/dashboard');
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          multiline
          placeholder="Descrição completa"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <DateTimeInput name="date_and_hour" />
        <Input name="localization" placeholder="Localização" />
        <button type="submit">
          {' '}
          <MdAddCircleOutline size={18} /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
