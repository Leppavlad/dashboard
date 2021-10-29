import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Ideas() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Ideas'));
  });
  return <p>Ideas</p>;
}
