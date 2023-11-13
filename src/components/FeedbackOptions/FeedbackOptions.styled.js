import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  text-align: center;
`;

export const ListBtn = styled.button`
  width: 140px;
  height: 40px;
  text-transform: uppercase;
  font-size: 24px;
  background-color: blue;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    color: black;
    transform: scale(1.2);
  }
`;

export const ListItem = styled.li`
  flex-grow: 1;
`;
