export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  NOT_FOUND: 'C001',
  DUPLICATE_PROJECT: 'P001',
  NOT_ACCEPTABLE: 'P003',
  EXPIRED_ACCESS_TOKEN: '????',
  INVALID_ACCESS_TOKEN: '????',
  INVALID_REFRESH_TOKEN: '????',
  EXPIRED_REFRESH_TOKEN: '????',
  NULL_REFRESH_TOKEN: '????',
  UNEXPECTED_TOKEN_ERROR: '????',
  UNAUTHORIZED: '????',
} as const;

export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: 'NOT FOUND',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: '새로고침',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    BODY: '확인 후 다시 시도해주세요.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.NOT_ACCEPTABLE]: {
    HEADING: '잘못된 접근입니다.',
    BODY: '접근 불가능한 페이지 입니다.',
    BUTTON: '홈으로 가기',
  },
} as const;

export const ERROR_MESSAGE =
  '오류가 발생했습니다. 잠시 후 다시 시도해주세요.' as const;

export const LOCAL_STORAGE = {
  ACCESS_TOKEN: 'myrok_accessToken',
  REFRESH_TOKEN: 'myrok_refreshToken',
} as const;

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;

export const AXIOS_BASE_URL = '' as const;
