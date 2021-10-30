import styled from 'styled-components';

import { Card } from '../../ui/card/Card';

import { IndexElement } from '../index-element/IndexElement';

const IndexesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & + * {
    margin-top: 30px;
  }

  .card {
    padding: 30px;
    flex: 1 0 100px;
  }
`;

const indexArr = [
  { id: 1, data: { title: 'Unresolved', value: 60 } },
  { id: 2, data: { title: 'Overdue', value: 16 } },
  { id: 3, data: { title: 'Open', value: 43 } },
  { id: 4, data: { title: 'On hold', value: 64 } },
];

export function Indexes() {
  return (
    <IndexesWrapper>
      {indexArr.map(({ data, id }) => (
        <Card key={id}>
          <IndexElement data={data} />
        </Card>
      ))}
    </IndexesWrapper>
  );
}
