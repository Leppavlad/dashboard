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
  { data: { title: 'Unresolved', value: 60 } },
  { data: { title: 'Overdue', value: 16 } },
  { data: { title: 'Open', value: 43 } },
  { data: { title: 'On hold', value: 64 } },
];

export function Indexes() {
  return (
    <IndexesWrapper>
      {indexArr.map((index) => (
        <Card>
          <IndexElement data={index.data} />
        </Card>
      ))}
    </IndexesWrapper>
  );
}
