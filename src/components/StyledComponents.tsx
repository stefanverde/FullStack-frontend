import styled from 'styled-components';

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

export const RegistrationModal = styled.div`
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
  animation: slideDown 300ms ease-out forwards;
`;

export const BackToMain = styled.button`
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
