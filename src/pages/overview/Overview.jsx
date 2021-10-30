import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

import { Indexes } from '../../components/indexes/Indexes';
import { Trends } from '../../components/trends/Trends';

export function Overview() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Overview'));
  });
  return (
    <>
      <Indexes />
      <Trends />
    </>
  );
}
