import { useQuery } from '@tanstack/react-query';
import { getUserProjectInfo } from '~/apis/user';

export const useGetUserProjectInfo = () => {
  const { data, isFetched } = useQuery({
    queryKey: ['userProjectInfo'],
    queryFn: () => getUserProjectInfo(),
  });

  if (data === undefined)
    return {
      projectInfo: {
        projectId: 0,
        projectName: '',
      },
      isFetched,
    };

  return { projectInfo: data, isFetched };
};
