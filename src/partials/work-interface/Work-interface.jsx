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

  #header {
    padding: 0 30px;
  }
`;
const MainContent = styled.section`
  height: calc(100% - 100px);
  padding: 0 30px;
  overflow-y: auto;
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
        <Header id="header" />
        <MainContent>{children}</MainContent>
      </InterfaceMain>
    </InterfaceWrapper>
  );
}
