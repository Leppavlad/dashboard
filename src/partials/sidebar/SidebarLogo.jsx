import styled from 'styled-components';

import logo from './../../assets/icons/logo.svg';

const SidebarLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  img {
    width: 32px;
    height: auto;
  }
`;

export function SidebarLogo() {
  return (
    <SidebarLogoWrapper>
      <img src={logo} alt="" />
      Dashboard kit
    </SidebarLogoWrapper>
  );
}
