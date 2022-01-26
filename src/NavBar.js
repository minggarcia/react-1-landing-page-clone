import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as LogoOutLine } from './images/logo_outline.svg';

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
`;

export default function NavBar() {
  return (
    <nav css={navBarStyle}>
      <div css={navBarContent}>
        <LogoOutLine
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />

        <div css={navBarLinksStyle}>
          <div>How it works</div>
          <div>Pricing</div>
          <div>Log In</div>
          <button css={getStartedButton}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
