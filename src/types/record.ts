import { YYYYMMDD } from '~/types/project';
import { UserInfo } from '~/types/user';

export interface RecordInfo {
  recordId: number;
  recordName: string;
  recordDate: YYYYMMDD;
  recordWriterName: string;
}

export interface Record {
  projectId: number;
  recordName: string;
  recordDate: YYYYMMDD;
  recordWriterId: number;
  recordContent: string;
  tagList: string[];
  memberList: number[];
}

export interface RecordDetail extends Omit<Record, 'projectId' | 'memberList'> {
  recordId: number;
  memberList: Pick<UserInfo, 'memberId' | 'name'>[];
}

export interface Summary {
  summaryId: number;
  summary: string;
}

export interface DashBoardTag {
  tagName: string;
  percentage: number;
}

export interface RecordTag {
  tagName: string;
  count: number;
}
