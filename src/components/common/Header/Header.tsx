/** @jsxImportSource @emotion/react */

import { useProject } from '~/hooks/useProject';

const Header = () => {
  const { projectName } = useProject();
  return <div>{projectName}</div>;
};

export default Header;
