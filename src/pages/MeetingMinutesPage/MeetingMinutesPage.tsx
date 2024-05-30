import RecordTable from '~/components/meeting_minutes/RecordTable/RecordTable';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import type { RecordInfo } from '~/types/record';
import { useNavigate } from 'react-router-dom';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import RecordTableHeader from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader';

const meetingMinutesPageContainer = css`
  padding: 30px;
`;

const MeetingMinutesPage = () => {
  const [recordList, setRecordList] = useState<RecordInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<'new' | 'old'>('new');
  const navigate = useNavigate();
  const { recordInfoList, isFetched } = useGetRecordList();

  useEffect(() => {
    if (isFetched) {
      setRecordList(recordInfoList);
      setTotalPage(Math.ceil(recordInfoList.length / 8));
      setCurrentPage(1);
    }
  }, [recordInfoList, isFetched]);

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const handleListNewSort = () => {
    setSortMethod('new');
    setRecordList(recordInfoList);
  };
  const handleListOldSort = () => {
    setSortMethod('old');
    setRecordList([...recordInfoList].reverse());
  };

  return (
    <div css={meetingMinutesPageContainer}>
      <RecordTableHeader
        sortMethod={sortMethod}
        handleListNewSort={handleListNewSort}
        handleListOldSort={handleListOldSort}
      />
      <RecordTable
        recordList={recordList}
        currentPage={currentPage}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MeetingMinutesPage;
