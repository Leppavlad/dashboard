import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Tickets() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Tickets'));
  });
  return <p>Tickets</p>;
}
