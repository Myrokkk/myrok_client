import { useEffect, useState } from 'react';
import TextEditor from '~/components/common/TextEditor/TextEditor';
import { css } from '@emotion/react';
import RecordWriteInfoBox from '~/components/meeting_minutes/RecordWriteInfoBox/RecordWriteInfoBox';
import ParticipantInfoBox from '~/components/meeting_minutes/ParticipantInfoBox/ParticipantInfoBox';
import Button from '~/components/common/Button/Button';
import { generateYYYYMMDD } from '~/utils/generateYYYYMMDD';

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
  const [recordData, setRecordData] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [memberList, setMemberList] = useState<number[]>([]);
  const [recordName, setRecordName] = useState('');
  const recordDate = generateYYYYMMDD(new Date());

  useEffect(() => {
    console.log(recordData);
  }, [recordData]);

  useEffect(() => {
    console.log(tagList);
  }, [tagList]);

  useEffect(() => {
    console.log(memberList);
  }, [memberList]);

  const handleRecordWriteSubmit = () => {
    const isWriteFinish = confirm('회의록 작성을 완료하시겠습니까?');

    if (!isWriteFinish) {
      return;
    }
  };

  return (
    <div css={meetingMinutesWritePageContainer}>
      <div css={textEditorWrapper}>
        <TextEditor handleTextDataChange={setRecordData} />
      </div>
      <div css={infoContainer}>
        <RecordWriteInfoBox
          handleTagListChange={setTagList}
          handleRecordNameChange={setRecordName}
        />
        <ParticipantInfoBox handleMemberListChange={setMemberList} />
        <Button
          css={writeButton}
          variant="primary"
          size="lg"
          onClick={handleRecordWriteSubmit}
        >
          작성완료
        </Button>
      </div>
    </div>
  );
};

export default MeetingMinutesWritePage;
