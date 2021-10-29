import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Subscription() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Subscription'));
  });
  return <p>Subscription</p>;
}
