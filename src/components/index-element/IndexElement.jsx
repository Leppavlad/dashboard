import styled from 'styled-components';

const IndexElementWrapper = styled.div``;
const IndexElementTitle = styled.div`
  font-size: 2.4rem;
  text-align: center;
`;
const IndexElementValue = styled.div`
  font-size: 4rem;
  text-align: center;

  &.small {
    font-size: 2.4rem;
  }
`;

export function IndexElement({ data, small }) {
  const { title, value } = data;
  return (
    <IndexElementWrapper>
      <IndexElementTitle>{title}</IndexElementTitle>
      <IndexElementValue className={`${small ? 'small' : ''}`}>
        {value}
      </IndexElementValue>
    </IndexElementWrapper>
  );
}
