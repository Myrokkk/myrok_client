/** @jsxImportSource @emotion/react */

import {
  explainText,
  titleContainer,
  titleText,
} from '~/components/common/Title/Title.styles';

const Title = () => {
  return (
    <div css={titleContainer}>
      <h1 css={explainText}>너와 나의 회의록</h1>
      <h2 css={titleText}>마이록</h2>
    </div>
  );
};

export default Title;
