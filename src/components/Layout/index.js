import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import GlobalStyle from '../../styles/global';
import * as S from './styles';

const Layout = ({ children }) => (
  <>
    <S.Container>
      <GlobalStyle />
      <Sidebar />
      <S.Content>{children}</S.Content>
      <MenuBar />
    </S.Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
