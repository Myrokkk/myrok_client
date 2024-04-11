import type { Period } from '~/types/project';

export interface UserProjectInfo extends Period {
  projectId: number;
  projectName: string;
}
