import { Route, Routes } from 'react-router-dom';
import CSS3D from '../Posts/CSS3D/CSS3D';
import LoadingRings from '../Posts/LoadingRings/LoadingRings';

const PageRouter = () => {
  const POST_PATH = '/posts';

  return (
    <Routes>
      <Route path={`${POST_PATH}/css3d`} element={<CSS3D />} />
      <Route path={`${POST_PATH}/loading-rings`} element={<LoadingRings />} />
    </Routes>
  );
};

export default PageRouter;
