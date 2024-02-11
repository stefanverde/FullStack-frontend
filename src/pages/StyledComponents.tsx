import { keyframes } from '@emotion/react';
import styled from 'styled-components';

export const linkStyle = {
  color: 'black',
  textDecoration: 'none',
};
export const Button = styled.button`
  position: relative;
  left: 20%;
  padding: 8px 16px;
  width: fit-content;

  border-radius: 30px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 250;
  font-size: 18px;
  cursor: pointer;
`;
export const TextButton = styled.button`
  background-color: whitesmoke;
  border: none;
`;
export const Modal = styled.div`
  position: absolute;
  top: 20vh;
  left: calc(50% - 10rem);
  width: 18rem;
  height: fit-content;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.35);
  animation: slide-down 300ms ease-out forwards;
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
