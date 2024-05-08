import { css } from '@emotion/react';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import { Theme } from '~/styles/Theme';

const participantInfoBoxContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 560px;
  height: 160px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

const participantContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 320px;
  max-height: 100px;
  overflow-y: auto;
`;

const tagStyling = css`
  font-size: 16px;
  font-weight: 800;
`;

const ParticipantInfoBox = () => {
  const members = [
    '송지은',
    '백승지',
    '김도연',
    '이가연',
    '송지은',
    '백승지',
    '김도연',
    '이가연',
  ];

  return (
    <div css={participantInfoBoxContainer}>
      <Text size="xxl" weight="bold">
        참가자
      </Text>
      <div css={participantContainer}>
        {members.map((member) => {
          return (
            <Tag.Check
              key={member}
              css={tagStyling}
              act="check"
              handleTagCheck={() => {}}
              content={member}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantInfoBox;
