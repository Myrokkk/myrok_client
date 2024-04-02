/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '~/components/common/Button/Button';
import Title from '~/components/common/Title/Title';

const landingPageContainer = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100vw;
  height: 90vh;
  padding: 20px 40px;
`;

const titleAndLogInButtonContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: fit-content;
  gap: 10px;
`;

const logInButton = css`
  width: 250px;
  height: 70px;

  font-size: 24px;
`;

const LandingPage = () => {
  return (
    <div css={landingPageContainer}>
      <div css={titleAndLogInButtonContainer}>
        <Title />
        <Button variant="primary" size="lg" css={logInButton}>
          마이록 시작하기
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
