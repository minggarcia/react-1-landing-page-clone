import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as LogoOutLine } from './images/logo_outline.svg';

const footerStyle = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 100px 30px;
  color: rgb(43, 60, 66);
  gap: 90px;

  span {
    color: rgb(56, 78, 86);
  }
`;
const gridStyle = css`
  cursor: pointer;
  color: rgb(43, 60, 66);
  font-weight: 600;
  line-height: 180%;
`;

const wobokaLine = css`
  line-height: 150%;
  margin-left: 30px;
`;
export default function Footer() {
  return (
    <div>
      <footer>
        <div css={footerStyle}>
          <div css={wobokaLine}>
            <LogoOutLine
              style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            />{' '}
            Wobaka <br />
            Made in Sweden The CRM that makes you smile, since 2019 Follow along
            on our{' '}
            <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>blog</span>
          </div>

          <div>
            <span>Company</span>
            <div css={gridStyle}>
              <div>About</div> <div>Wobaka</div>
              <div>Pricing</div> <div>Support </div>
              <div>API Docs</div> <div>Book a demo!</div>
            </div>
          </div>
          <div>
            <span>Product</span>
            <div css={gridStyle}>
              <div>Automations</div> <div>Mailbox </div>
              <div>Privacy-Friendly</div> <div>Cold Email Outreach</div>
              <div>Integrations</div>
            </div>
          </div>
          <div>
            <span>Use cases</span>
            <div css={gridStyle}>
              <div>Indie Makers</div> <div>SaaS Sales</div>
              <div>Newsletters</div> <div>Podcasts</div> <div>Agencies</div>
            </div>
          </div>
          <div>
            <span>Privacy</span>
            <div css={gridStyle}>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div css={gridStyle}>
            <span>Have a question?</span> <div>hey@wobaka.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
