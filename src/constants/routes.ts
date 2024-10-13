export const ROUTES = {
  ROOT: '/myrok_client/',
  LOGIN: '/myrok_client/login',
  START: '/myrok_client/start',
  JOIN: '/myrok_client/join',
  CREATE: '/myrok_client/create',
  DASH_BOARD: '/myrok_client/dashboard',
  PROJECT_HOLDER: '/myrok_client/project-holder',
  MEETING_MINUTES: '/myrok_client/meeting-minutes',
  MEETING_MINUTES_RECORD: '/myrok_client/meeting-minutes/:recordId',
  MEETING_MINUTES_EDIT: '/myrok_client/meeting-minutes/:recordId/edit',
  MEETING_MINUTES_WRITE: '/myrok_client/meeting-minutes/write',
  RELOAD: 0,
} as const;
