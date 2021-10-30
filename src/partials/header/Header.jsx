import React, { useState } from 'react';
import styled from 'styled-components';

import { FaSearch, FaBell } from 'react-icons/fa';

import { useAppSelector } from '../../app/hooks';
import { selectTitle } from '../../features/header/headerSlice';

const HeaderSection = styled.section`
  height: 100px;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const HeaderTitle = styled.h2`
  display: block;
  margin-right: auto !important;
`;
const HeaderControls = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding: 0 10px;
  }
`;
const HeaderAuth = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-left: 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;
const AuthName = styled.div`
  + * {
    margin-left: 20px;
  }
`;
const AuthImage = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px dotted rgba(0, 0, 0, 0.3);
  }

  .wrapper {
    width: 44px;
    height: 44px;
    object-fit: contain;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export function Header({ ...all }) {
  const [searchVisibility, changeSearchVisibility] = useState(false);
  const title = useAppSelector(selectTitle);
  return (
    <HeaderSection {...all}>
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderControls>
          {searchVisibility ? (
            <input type="search" />
          ) : (
            <FaSearch className="interface" />
          )}
          <FaBell className="interface" />
        </HeaderControls>
        <HeaderAuth>
          <AuthName>Username</AuthName>
          <AuthImage>
            <div className="wrapper">
              <img src="https://unsplash.it/100/100" alt="" />
            </div>
          </AuthImage>
        </HeaderAuth>
      </HeaderWrapper>
    </HeaderSection>
  );
}
