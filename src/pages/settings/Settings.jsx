import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Settings() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Settings'));
  });
  return <p>Settings</p>;
}
