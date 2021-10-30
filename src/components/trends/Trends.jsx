import { Card } from '../../ui/card/Card';

import { TrendsGraph } from './TrendsGraph';
import { IndexElement } from '../index-element/IndexElement';

import styled from 'styled-components';

const TrendsWrapper = styled.div``;
const TrendsIndexesWrapper = styled.div``;

const indexArr = [
  { data: { title: 'Resolved', value: 449 } },
  { data: { title: 'Received', value: 426 } },
  { data: { title: 'Average first response time', value: '33m' } },
  { data: { title: 'Average response time', value: '3h 8m' } },
  { data: { title: 'Resolution within SLA', value: '94%' } },
];

export function Trends() {
  return (
    <Card>
      <TrendsWrapper>
        <TrendsGraph />
        <TrendsIndexesWrapper>
          {indexArr.map((index) => (
            <IndexElement small data={index.data} />
          ))}
        </TrendsIndexesWrapper>
      </TrendsWrapper>
    </Card>
  );
}
