import { axiosInstance } from '~/apis/axiosInstance';
import type { ProjectInfo, ProjectMemberNames } from '~/types/project';

export const postCreateProject = (data: ProjectInfo) => {
  return axiosInstance.post('/myrok/project', data);
};

export const postJoinProject = (data: { inviteCode: string }) => {
  return axiosInstance.post('/myrok/project/participate', data);
};

export const deleteProject = (projectId: number) => {
  return axiosInstance.delete('/myrok/project', {
    data: { projectId: projectId },
  });
};

export const getProjectMemberNames = async (projectId: number) => {
  const { data } = await axiosInstance.get<{
    projectMemberNames: ProjectMemberNames[];
  }>(`/myrok/project/${projectId}/members`);

  return data;
};

export const getInviteCode = async (projectId: number) => {
  const { data } = await axiosInstance.get<{ inviteCode: string }>(
    `/myrok/project/${projectId}`,
  );

  return data;
};
