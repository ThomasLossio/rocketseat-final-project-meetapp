import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, DateAndLocale } from './styles';
import api from '~/services/api';

import history from '~/services/history';

export default function MeetupDetail({ match }) {
  const [meetup, setMeetup] = useState([]);
  const [banner, setBanner] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`organizing/${id}`);

      const data = {
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.date_and_hour),
          "d 'de' MMMM', às' HH'h'",
          { locale: pt }
        ),
      };

      setMeetup(data);
      if (data.banner) {
        setBanner(data.banner);
      }
    }
    loadMeetup();
  }, [id]);

  async function handleCancel() {
    if (!meetup.cancelable) {
      toast.error('Este meetup não pode ser cancelado!');
      return;
    }

    const response = await api.delete(`meetups/${meetup.id}`);

    if (response.status === 204) {
      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } else {
      toast.error('Algo deu errado, tente novamente mais tarde!');
    }
  }

  async function handleEdit() {
    if (!meetup.cancelable) {
      toast.error('Este meetup não pode ser editado!');
      return;
    }

    history.push(`/meetup/edit/${meetup.id}`);
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button type="button" onClick={handleEdit}>
            <MdModeEdit size={20} /> Editar
          </button>
          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size={20} /> Cancelar
          </button>
        </div>
      </header>

      <img
        src={
          banner.url ||
          'https://ak1.ostkcdn.com//images/products/is/images/direct/7b6c3256bfe728cf81c9be8ec0d56b62da59571e/Title-Unavailable.jpg'
        }
        alt="meetup"
      />

      <p>{meetup.description}</p>

      <DateAndLocale>
        <MdEvent size={20} color="#999" />
        <span>{meetup.dateFormatted}</span>
        <MdLocationOn size={20} color="#999" />
        <span>{meetup.localization}</span>
      </DateAndLocale>
    </Container>
  );
}
