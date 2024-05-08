import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import { useGetRecord } from '~/hooks/@query/useGetRecord';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { Theme } from '~/styles/Theme';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';

const meetingMinutesRecordPageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
`;

const recordDetailContainer = css`
  width: 60%;
  min-height: 400px;
  max-height: 700px;
  overflow-y: auto;
  padding: 10px;

  background-color: ${Theme.color.white};
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray200};
`;

const recordWriteInfoBoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 300px;
  max-width: 460px;
  height: fit-content;
  gap: 20px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const tagContainer = css`
  display: flex;
  justify-content: space-between;
  max-height: 130px;
  gap: 2px;
`;

const tagsGrid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;

  max-width: 362px;
  max-height: 84px;
  overflow-y: auto;
`;

const participantInfoBoxContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 460px;
  max-height: 160px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

const participantContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 220px;
  max-height: 100px;
  overflow-y: auto;
`;

const tagStyling = css`
  padding: 10px 20px;

  font-size: 20px;
  font-weight: 800;
`;

const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 60px;

  height: 100%;
`;

const MeetingMinutesRecordPage = () => {
  const recordId = useParams().recordId;
  if (recordId === undefined || isNaN(Number(recordId))) {
    return <NotFoundPage />;
  }

  const {
    recordContent,
    recordName,
    tagList,
    recordWriterId,
    memberList,
    recordDate,
  } = useGetRecord(Number(recordId));
  const recordWriterName = memberList.find(
    (member) => member.memberId === recordWriterId,
  )?.name;

  return (
    <div css={meetingMinutesRecordPageContainer}>
      <div css={recordDetailContainer}>
        <div dangerouslySetInnerHTML={{ __html: recordContent }}></div>
      </div>
      <div css={infoContainer}>
        <div css={recordWriteInfoBoxContainer}>
          <div css={titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              회의명
            </Text>
            <Text size="xl" weight="bold">
              {recordName}
            </Text>
          </div>
          <div css={titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              작성자
            </Text>
            <Text size="xl" weight="bold">
              {recordWriterName === undefined ? '' : recordWriterName}
            </Text>
          </div>
          <div css={titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              작성일
            </Text>
            <Text weight="bold">{generateDateToStringFormat(recordDate)}</Text>
          </div>
          <div css={tagContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              태그
            </Text>
            <div css={tagsGrid}>
              {tagList.map((newTag, i) => {
                const color = Theme.presetColors[i % 10];
                return (
                  <Tag
                    key={newTag}
                    color={color}
                    outLine={true}
                    content={newTag}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div css={participantInfoBoxContainer}>
          <Text size="xxl" weight="bold">
            참가자
          </Text>
          <div css={participantContainer}>
            {memberList.map((member) => {
              const { memberId, name } = member;
              return (
                <Tag
                  key={memberId}
                  color={
                    memberId === recordWriterId
                      ? Theme.color.primary500
                      : Theme.color.gray800
                  }
                  css={tagStyling}
                  content={name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingMinutesRecordPage;
