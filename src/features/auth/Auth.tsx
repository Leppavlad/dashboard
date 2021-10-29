import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;
export function Auth() {
  return (
    <Overlay>
      <h2>Авторизация</h2>
    </Overlay>
  );
}
