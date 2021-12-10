import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Main from './Components/Pages/Main/Main';
import PageRouter from './Components/Pages/PageRouter/PageRouter';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <PageRouter />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
