import React from 'react';
import styled from 'styled-components';

import { Header } from '../header/Header';
import { SidebarMenu } from '../sidebar/SidebarMenu';
import { SidebarLogo } from '../sidebar/SidebarLogo';

const InterfaceWrapper = styled.div`
  display: flex;
`;
const InterfaceAside = styled.aside`
  flex: 0.1 0 250px;
  height: 100vh;
  padding: 30px 0;
`;
const InterfaceMain = styled.main`
  flex: 1 1 250px;
  height: 100vh;
  padding: 0 30px;
  overflow: hidden;
`;

export function WorkInterface({ children, location }) {
  return (
    <InterfaceWrapper>
      <InterfaceAside>
        <SidebarLogo />
        <SidebarMenu url={location.pathname} />
      </InterfaceAside>
      <InterfaceMain>
        <Header />
        {children}
      </InterfaceMain>
    </InterfaceWrapper>
  );
}
