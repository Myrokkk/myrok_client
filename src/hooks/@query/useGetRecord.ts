import { useQuery } from '@tanstack/react-query';
import { getRecord } from '~/apis/record';
import type { RecordDetail } from '~/types/record';

export const useGetRecord = (recordId: number) => {
  const { data } = useQuery({
    queryKey: [recordId, 'record'],
    queryFn: () => getRecord(recordId),
  });

  if (data === undefined) return {} as RecordDetail;

  return data;
};
