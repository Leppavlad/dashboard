import { Card } from '../../ui/card/Card';

import { TrendsGraph } from './TrendsGraph';
import { IndexElement } from '../index-element/IndexElement';

import styled from 'styled-components';

const TrendsWrapper = styled.div``;
const TrendsIndexesWrapper = styled.div``;

const indexArr = [
  { id: 1, data: { title: 'Resolved', value: 449 } },
  { id: 2, data: { title: 'Received', value: 426 } },
  { id: 3, data: { title: 'Average first response time', value: '33m' } },
  { id: 4, data: { title: 'Average response time', value: '3h 8m' } },
  { id: 5, data: { title: 'Resolution within SLA', value: '94%' } },
];

export function Trends() {
  return (
    <Card>
      <TrendsWrapper>
        <TrendsGraph />
        <TrendsIndexesWrapper>
          {indexArr.map(({ data, id }) => (
            <IndexElement small key={id} data={data} />
          ))}
        </TrendsIndexesWrapper>
      </TrendsWrapper>
    </Card>
  );
}
