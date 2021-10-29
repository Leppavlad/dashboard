import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Overview() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Overview'));
  });
  return <p>Overview</p>;
}
