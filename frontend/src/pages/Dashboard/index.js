import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { Container, List, ContentList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing', {
        params: { page: 1 },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date_and_hour),
          "d 'de' MMMM', às' HH'h'",
          { locale: pt }
        ),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNew() {
    history.push('/meetup/new');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>

        <button type="button" onClick={handleNew}>
          <MdAddCircleOutline size={18} /> Novo meetup
        </button>
      </header>

      <List>
        {meetups.map(meetup => (
          <ContentList key={meetup.id} to={`/meetup/detail/${meetup.id}`}>
            <strong>{meetup.title}</strong>
            <div>
              <p>{meetup.dateFormatted}</p>{' '}
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        ))}
      </List>

      {/*       <Pagination>
        <span disabled>&laquo;</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&raquo;</span>
      </Pagination> */}
    </Container>
  );
}
