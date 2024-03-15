import styled from 'styled-components';

//differences between ColorButton and Button are padding,color,positioning
export const ColoredButton = styled.button`
  position: relative;

  width: fit-content;
  border-radius: 20px;
  background-color: lightblue;
  font-weight: 300;
  padding: 10px;
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  align-self: center;
  cursor: pointer;
`;

//difference between Button and TextButton is the border
export const TextButton = styled.button`
  position: relative;
  width: fit-content;
  border: none;
  background-color: whitesmoke;
  font-weight: 300;
  font-size: 18px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  align-self: flex-end;
`;
