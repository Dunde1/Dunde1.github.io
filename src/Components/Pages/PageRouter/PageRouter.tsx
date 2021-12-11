import { Route, Routes } from 'react-router-dom';
import CSS3D from '../Posts/CSS3D/CSS3D';
import LoadingRings from '../Posts/LoadingRings/LoadingRings';
import MagicNavigation from '../Posts/MagicNavigation/MagicNavigation';

const PageRouter = () => {
  const POST_PATH = '/posts';

  return (
    <Routes>
      <Route path={`${POST_PATH}/css3d`} element={<CSS3D />} />
      <Route path={`${POST_PATH}/loading-rings`} element={<LoadingRings />} />
      <Route path={`${POST_PATH}/magic-navigation`} element={<MagicNavigation />} />
    </Routes>
  );
};

export default PageRouter;
