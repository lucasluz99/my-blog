import React from 'react';

import * as S from './styles';
import Profile from '../Profile';

export default function Sidebar({ children }) {
  return (
    <S.Container>
      <Profile />
    </S.Container>
  );
}
