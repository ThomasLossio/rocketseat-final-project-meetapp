import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
      align-items: center;

      button {
        margin: 5px 0 0;
        padding: 10px 15px;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 3px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: background 0.2s;
      }

      button:first-child {
        background-color: #4dbaf9;
        width: 95px;
        margin-right: 10px;

        &:hover {
          background: ${darken(0.03, '#4dbaf9')};
        }
      }

      button:nth-child(2) {
        background-color: #f94d6a;
        width: 115px;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }
      }
    }
  }

  img {
    margin-top: 45px;
    max-height: 300px;
    object-fit: cover;
  }

  p {
    margin-top: 25px;
    color: #fff;
    font-size: 18px;
  }
`;

export const DateAndLocale = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 25px 0 5px;
    font-size: 16px;
    color: #999;
  }
`;
