import styled from 'styled-components';

const CardStyled = styled.div`
  padding: 30px 0;
  border-radius: 1rem;
`;

export function Card({ children }) {
  return <CardStyled className="card">{children}</CardStyled>;
}
