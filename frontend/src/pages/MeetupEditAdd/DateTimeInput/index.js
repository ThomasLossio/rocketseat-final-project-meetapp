import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker() {
  registerLocale('pt', pt);
  const ref = useRef();
  const { fieldName, registerField, defaultValue, error } = useField(
    'date_and_hour'
  );
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: 'date_and_hour',
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Hora"
        ref={ref}
        locale="pt"
        dateFormat="d 'de' MMMM', às' HH':'mm"
        placeholderText="Data do meetup"
      />
      {error && <span>Data é obrigatório</span>}
    </>
  );
}
