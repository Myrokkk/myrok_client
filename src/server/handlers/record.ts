import { rest } from 'msw';
import { projectMemberNames } from '~/server/mocks/project';
import {
  recordList as recordListData,
  record as recordData,
  summary as summaryData,
} from '~/server/mocks/record';

let recordList = [...recordListData];
let record = [...recordData];
let summary = [...summaryData];
let lastRecordId = recordListData[0].recordId;

export const recordHandler = () => {
  return [
    rest.get('/myrok/list', getRecordList),
    rest.get('/myrok/records/:recordId', getRecord),
    rest.post('/myrok/records', postRecord),
  ];
};

const getRecord: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const { recordId } = req.params;

  const recordDetail = record.find(
    (data) => data.recordId === Number(recordId),
  );

  if (recordDetail === undefined) return res(ctx.status(404));

  return res(ctx.status(200), ctx.json({ ...recordDetail }));
};

const getRecordList: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(recordList));
};

const postRecord: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const {
    recordName,
    recordContent,
    tagList,
    recordWriterId,
    recordDate,
    memberList,
    projectId,
  } = await req.json();

  lastRecordId += 1;
  let recordWriterName = projectMemberNames.find(
    (member) => member.memberId === recordWriterId,
  );

  recordList = [
    {
      recordId: lastRecordId,
      recordName: recordName,
      recordDate: recordDate,
      recordWriterName: recordWriterName ? recordWriterName.name : '송지은',
    },
    ...recordList,
  ];
  summary.push({ summaryId: lastRecordId, summary: '' });

  const member = memberList.map((memberId: number) => {
    return projectMemberNames.find((project) => project.memberId === memberId);
  });

  record.push({
    recordId: lastRecordId,
    recordName: recordName,
    recordDate: recordDate,
    recordWriterId: recordWriterId,
    recordContent: recordContent,
    tagList: [...tagList],
    memberList: [...member],
  });

  return res(
    ctx.status(200),
    ctx.json({
      recordId: lastRecordId,
    }),
  );
};
