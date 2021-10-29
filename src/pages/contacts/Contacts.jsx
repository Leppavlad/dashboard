import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Contacts() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Contacts'));
  });
  return <p>Contacts</p>;
}
