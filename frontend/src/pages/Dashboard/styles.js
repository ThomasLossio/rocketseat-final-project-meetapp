import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

    button {
      margin: 5px 0 0;
      padding: 10px 15px;
      width: 150px;
      align-self: flex-end;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;

export const List = styled.ul`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
`;

export const ContentList = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
  height: 62px;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }

  strong {
    color: #fff;
    font-weight: 18px;
  }

  div {
    display: flex;
    align-items: center;

    p {
      color: #999;
      font-weight: 16px;
      margin-right: 20px;
    }
  }
`;

export const Pagination = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  span {
    padding: 8px 10px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;
