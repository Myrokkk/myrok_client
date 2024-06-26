import { css } from '@emotion/react';

export const arrowLeftIconWrapper = css`
  transition: 0.3s;
  transform: translateX(6px);

  button:hover > & {
    transform: translateX(0);
  }
`;

export const backButton = css`
  display: inline-flex;
  align-items: center;
  column-gap: 12px;

  height: 42px;
  padding: 4px;
`;
