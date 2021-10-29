import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Agents() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Agents'));
  });
  return <p>Agents</p>;
}
