import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 15px;
`;

export const Button = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;

  :active {
    background-color: #6a6aec;
  }
`;
