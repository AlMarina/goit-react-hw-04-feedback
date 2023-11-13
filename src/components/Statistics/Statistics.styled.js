import styled from 'styled-components';

export const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 32px;
  margin-bottom: 10px;

  &:last-child {
    color: violet;
    // color: green;
    font-weight: 600;
  }

  &:nth-last-child(2) {
    margin-top: 20px;
    font-weight: 600;
    color: green;
  }
`;
