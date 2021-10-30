import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;

    .text-alt {
      color: ${({ theme }) => theme.colors.textAlt}
    }
  }
  
  a {
    color: ${({ theme }) => theme.colors.link.text};
    text-decoration: none;
    cursor: pointer;
  } 

  svg.interface {
    fill: ${({ theme }) => theme.colors.interfaceElement};
  }

  aside {
    background: ${({ theme }) => theme.colors.aside};
    color: ${({ theme }) => theme.colors.asideText};

    ul {
      padding: 0;
    }

    .interface {
      a {
        position: relative;
        display: flex;
        align-items: center;
        height: 55px;
        padding: 0 30px;
        color: ${({ theme }) => theme.colors.interfaceElement};

        &.active {
          color: ${({ theme }) => theme.colors.interfaceElement};
          background-color: rgba(255,255,255,0.1);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.asideActive};
          transform: scaleY(0);
          transition: transform .2s;
        }

        &:hover {
          background-color: rgba(255,255,255,0.1);
          color: ${({ theme }) => theme.colors.asideActive};

          &::before {
            transform: scaleY(1);
            transition: transform .2s;
          }

          svg {
            fill: ${({ theme }) => theme.colors.asideActive};
          }
        }
      }
      svg {
        display: inline-block;
        width: 30px;
        margin-right: 30px;
        fill: ${({ theme }) => theme.colors.interfaceElement};
      }
    }
  }

  main {
    .card {
      background-color: ${({ theme }) => theme.colors.card};
      border: 1px solid ${({ theme }) => theme.colors.interfaceElement}77;
    }
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
  }

`;
