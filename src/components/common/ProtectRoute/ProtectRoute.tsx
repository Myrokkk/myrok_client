import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';
import { ProjectProvider } from '~/context/ProjectContext';

const ProtectRoute = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);

  useEffect(() => {
    if (!accessToken) {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);
      alert('로그인이 필요합니다.');
      navigate(ROUTES.ROOT);
    }
  }, []);

  return (
    <ProjectProvider>
      <Outlet />
    </ProjectProvider>
  );
};

export default ProtectRoute;
