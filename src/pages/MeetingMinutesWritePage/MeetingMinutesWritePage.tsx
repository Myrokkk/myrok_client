import { useEffect, useState } from 'react';
import TextEditor from '~/components/common/TextEditor/TextEditor';
import { css } from '@emotion/react';
import RecordWriteInfoBox from '~/components/meeting_minutes/RecordWriteInfoBox/RecordWriteInfoBox';
import ParticipantInfoBox from '~/components/meeting_minutes/ParticipantInfoBox/ParticipantInfoBox';
import Button from '~/components/common/Button/Button';
const meetingMinutesWritePageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
`;

const textEditorWrapper = css`
  width: 60%;
`;

const infoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(40% - 60px);
  height: 100%;
`;

const writeButton = css`
  align-self: flex-end;
  width: 150px;
  height: 50px;

  font-size: 24px;
  font-weight: bold;

  border-radius: 14px;
`;

const MeetingMinutesWritePage = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div css={meetingMinutesWritePageContainer}>
      <div css={textEditorWrapper}>
        <TextEditor handleTextDataChange={setData} />
      </div>
      <div css={infoContainer}>
        <RecordWriteInfoBox />
        <ParticipantInfoBox />
        <Button css={writeButton} variant="primary" size="lg">
          작성완료
        </Button>
      </div>
    </div>
  );
};

export default MeetingMinutesWritePage;
