import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div.react-datepicker__input-container {
      display: flex;
      flex-direction: column;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin: 0 0 10px;
      padding: 15px 0 0 15px;
      height: 200px;
      resize: none;
      font-size: 15px;

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

    > button {
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
      font-size: 14px;
      transition: background 0.2s;
      display: flex;
      justify-content: space-between;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;
