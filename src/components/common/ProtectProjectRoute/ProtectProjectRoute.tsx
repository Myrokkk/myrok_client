import { Outlet, useNavigate } from 'react-router-dom';
import Error from '~/components/common/Error/Error';
import { HTTP_STATUS_CODE, LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';
import { useProject } from '~/hooks/useProject';

const ProtectProjectRoute = () => {
  const { projectId } = useProject();
  const navigate = useNavigate();

  if (projectId !== 0)
    return (
      <Error
        statusCode={HTTP_STATUS_CODE.NOT_ACCEPTABLE}
        resetError={() => {
          localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
          localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);
          navigate(ROUTES.ROOT);
        }}
      />
    );

  return <Outlet />;
};

export default ProtectProjectRoute;
