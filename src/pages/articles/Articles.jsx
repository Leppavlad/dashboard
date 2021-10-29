import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeTitle } from '../../features/header/headerSlice';

export function Articles() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTitle('Articles'));
  });
  return <p>Articles</p>;
}
