import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

import ChoosePicture from '../../../assets/selecionarimagem.png';

export default function BannerInput() {
  const ref = useRef();
  const { defaultValue, registerField, fieldName } = useField('user');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    registerField({
      name: 'banner_id',
      ref: ref.current,
      path: 'dataset.file',
    });
  }, [ref, fieldName]); // eslint-disable-line

  async function handleChange(e) {
    console.tron.log(file);
    console.tron.log(preview);
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img src={preview || ChoosePicture} alt="Selecionar imagem" />

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
