import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    max-height: 300px;
    width: 100%;
    object-fit: cover;
    background: #eee;
  }

  input {
    display: none;
  }
`;
