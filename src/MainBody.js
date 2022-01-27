/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Automations from './images/feature-automations.webp';
import FeatureContact from './images/feature-contact.webp';
import FeatureDashboard from './images/feature-dashboard.webp';
import Pipeline from './images/feature-pipeline-cropped.webp';
import FeatureSearch from './images/feature-search.webp';
import FeatureTasks from './images/feature-tasks.webp';
import gif from './images/splash-gif.gif';
import control from './images/symbol 1.png';
import email from './images/symbol 2.png';
import built from './images/symbol 3.png';

const topHeader = css`
  margin-top: 100px;
  color: #0a0f10;
  font-size: 80px;
  line-height: 110%;
  font-weight: 900;
  text-align: center;
  font-weight: 800;
`;

const infoStyle = css`
  margin-top: 5px;
  color: rgb(43, 60, 66);
  font-size: 22px;
  line-height: 35.2px;
  text-align: center;
`;

const trialButton = css`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin: 0 580px;
  color: white;
  background: #314252;
  padding: 20px 40px;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
  border-radius: 5px;
  border: transparent;
  border-bottom: 5px solid #273542;
  font-weight: bolder;
`;

const gifStyle = css`
  width: 80%;
  border: 1px, solid #efe9db;
  margin-top: 40px;
  margin-left: 140px;
  margin-right: 110px;
  border-radius: 5px;
  justify-content: center;
`;

const firstSectionStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  margin-left: 200px;
  margin-right: 200px;
  gap: 40px;

  align-items: center;
  justify-content: center;
  padding: 60px 10px;
  p {
    display: block;
    color: #2b3c42;
    line-height: 140%;
  }
`;
const lineStyle = css`
  height: 3px;
  width: 100px;
  margin: 20px 0;
  background: #86e4b7;
`;

const sectionHeadingsStyle = css`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;

const secondSectionStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  margin-left: 170px;
  margin-right: 200px;
  gap: 40px;
  justify-content: center;
  gap: 80px;
`;

const featureSearchStyle = css`
  border: 1px solid #ece5d4;
  max-width: 100%;
  border-radius: 5px;
`;

const paragaphStyle = css`
  font-size: 16px;
  line-height: 140%;
  color: #2b3c42;
  margin-bottom: 20px;
`;

const checksSectionStyle = css`
  display: flex;
  justify-content: space-between;
  direction: row;
  color: #384e56;
  margin-right: 20px;
`;

const tickMarksStyle = css`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  ::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 3px;
    background-color: #7ebecb;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
  ::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: #7ebecb;
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

const featureContactStyle = css`
  border-right: 1px solid #ece5d4;
  max-width: 100%;
  border-radius: 5px;
`;

export default function MainBody() {
  return (
    <div>
      <h1 css={topHeader}>
        Simple CRM and <br />
        Sales Automation for <br />
        Small Teams
      </h1>
      <p css={infoStyle}>
        Wobaka is the all-in-one CRM and sales automation tool that makes it
        easy to manage
        <br />
        contacts, share emails and automate outreach, without losing your mind.
      </p>
      <button css={trialButton}>Start Free Trial</button>
      <div>
        <img src={gif} alt="gif" css={gifStyle} />
      </div>

      <section>
        <div css={firstSectionStyle}>
          <div>
            <h2>
              <img src={control} alt="symbol" />
              Stay in control
            </h2>
            <p>
              Never duplicate another contact or lose control over your leads.
              Wobaka makes it easy to stay on top of things.
            </p>
          </div>
          <div>
            <h2>
              <img src={built} alt="symbol" />
              Save hours on email
            </h2>
            <p>
              Stop wasting your time on follow-up emails. Put your sales on
              autopilot and step back in control when it's needed.
            </p>
          </div>
          <div>
            <h2>
              <img src={email} alt="symbol" />
              Built to last
            </h2>
            <p>
              Wobaka is like your favorite craft beer or artisan coffee. Made
              with love and hand-picked ingredients. No mega-corp here.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div css={secondSectionStyle}>
          <div>
            <img
              src={FeatureSearch}
              alt="feature-search"
              css={featureSearchStyle}
            />
          </div>
          <div>
            <h2 css={sectionHeadingsStyle}>Find anything</h2>
            <div className="lines" css={lineStyle} />
            <p css={paragaphStyle}>
              Search for anything or filter by tags and lead status. We also
              check for duplicates whenever you create a new contact.
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Text search</div>
              <div css={tickMarksStyle} />
              <div>Tags</div>
              <div css={tickMarksStyle} />
              <div>Duplicate checker</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div css={secondSectionStyle}>
          <div>
            <h2 css={sectionHeadingsStyle}>All in one place</h2>
            <div
              className="lines"
              css={lineStyle}
              style={{ background: '#ffabab' }}
            />
            <p css={paragaphStyle}>
              What did you send? When were you supposed to follow up? With
              Wobaka all your contact information and emails are in one place.
              Available to everyone in your team, anywhere, anytime.
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Notes</div>
              <div css={tickMarksStyle} />
              <div>Emails</div>
              <div css={tickMarksStyle} />
              <div>Tasks</div>
              <div css={tickMarksStyle} />
              <div>Opportunities</div>
            </div>
          </div>
          <div>
            <img
              src={FeatureContact}
              alt="feature-contact"
              css={featureContactStyle}
            />
          </div>
        </div>
      </section>

      <section>
        <div css={secondSectionStyle}>
          <div>
            <img
              src={FeatureTasks}
              alt="feature-tasks"
              css={featureSearchStyle}
            />
          </div>
          <div>
            <h2 css={sectionHeadingsStyle}>Never miss a follow-up</h2>
            <div className="lines" css={lineStyle} />
            <p css={paragaphStyle}>
              Todo lists makes it easy to keep track of follow-ups and stay in
              control when the pace is high. We'll even remind you in case your
              forgetting something.
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Due dates</div>
              <div css={tickMarksStyle} />
              <div>Assign user</div>
              <div css={tickMarksStyle} />
              <div>Search and filter</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div css={secondSectionStyle}>
          <div>
            <h2 css={sectionHeadingsStyle}>Your sales at a glance</h2>
            <div
              className="lines"
              css={lineStyle}
              style={{ background: '#ffabab' }}
            />
            <p css={paragaphStyle}>
              Need to find more leads? Or maybe send some emails? We give you
              your complete sales process in one simple overview.
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Activity log</div>
              <div css={tickMarksStyle} />
              <div>Simple overview</div>
              <div css={tickMarksStyle} />
              <div>Analytics</div>
            </div>
          </div>
          <div>
            <img
              src={FeatureDashboard}
              alt="feature-dashboard"
              css={featureContactStyle}
            />
          </div>
        </div>
      </section>

      <section>
        <div css={secondSectionStyle}>
          <div>
            <img src={Pipeline} alt="feature-tasks" css={featureSearchStyle} />
          </div>
          <div>
            <h2 css={sectionHeadingsStyle}>Customize your pipelines</h2>
            <div className="lines" css={lineStyle} />
            <p css={paragaphStyle}>
              Need one pipeline for leads and another for renewals? No problem.
              With Wobaka you can have as many pipelines as you like and tailor
              them to suit your needs.
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Kanban view</div>
              <div css={tickMarksStyle} />
              <div> Customizable</div>
              <div css={tickMarksStyle} />
              <div> Multiple currencies</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div css={secondSectionStyle}>
          <div>
            <h2 css={sectionHeadingsStyle}>Save hours on email</h2>
            <div className="lines" css={lineStyle} />
            <p css={paragaphStyle}>
              Save hours on email by automating your outreach and follow-ups. We
              know how much time it takes and have made it easy to automate it
              with just a few clicks
            </p>
            <div className="checks" css={checksSectionStyle}>
              <div css={tickMarksStyle} />
              <div>Email sequences</div>
              <div css={tickMarksStyle} />
              <div>Sending schedule</div>
              <div css={tickMarksStyle} />
              <div>Analytics</div>
            </div>
          </div>
          <div>
            <img
              src={Automations}
              alt="feature-automations"
              css={featureContactStyle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
