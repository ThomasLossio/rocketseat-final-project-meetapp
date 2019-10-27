import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 10px;
    }

    button {
      margin: 5px 0 0;
      padding: 0 20px;
      width: 160px;
      height: 44px;
      align-self: flex-end;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      justify-content: space-between;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;
