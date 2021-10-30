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
  overflow-y: auto;
`;
const AsideWrapper = styled.div`
  padding: 30px 0 50px;
`;
const InterfaceMain = styled.main`
  flex: 1 1 250px;
  height: 100vh;
  padding: 0 30px;
  overflow-y: auto;
`;
const MainWrapper = styled.div`
  padding: 0 0 30px;
`;

export function WorkInterface({ children, location }) {
  return (
    <InterfaceWrapper>
      <InterfaceAside>
        <AsideWrapper>
          <SidebarLogo />
          <SidebarMenu url={location.pathname} />
        </AsideWrapper>
      </InterfaceAside>
      <InterfaceMain>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </InterfaceMain>
    </InterfaceWrapper>
  );
}
