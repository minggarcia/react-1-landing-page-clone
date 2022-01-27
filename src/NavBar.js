import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as LogoOutLine } from './images/logo_outline.svg';

const toggleButton = css`
  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
    :checked {
      background-color: #2196f3;
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    :focus {
      box-shadow: 0 0 1px #2196f3;
    }
    :checked {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efe9db;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    ::before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #d4c7a9;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

const navBarStyle = css`
  height: 70px;
  width: 90%;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 0 60px;
  margin-right: 20px;
`;

const navBarContent = css`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
`;

const navBarLinksStyle = css`
  font-weight: 500;
  line-height: 140%;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #2b3c42;
  flex-direction: row;
  display: flex;
  gap: 35px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;
const getStartedButton = css`
  background: #e66a69;
  color: white;
  border: 0;
  border-radius: 5px;
  font-weight: 700;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 50px;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <nav css={navBarStyle}>
      <div css={navBarContent}>
        <LogoOutLine
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />

        <div css={navBarLinksStyle}>
          <div css={toggleButton}>
            <label>
              <input type="checkbox" />
              <span />
            </label>
          </div>
          <div>How it works</div>
          <div>Pricing</div>
          <div>Log In</div>
          <button css={getStartedButton}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
