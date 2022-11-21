import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Search from './pages/Search';
import Video from './pages/Video';
import Channel from './pages/Channel';
import MainLayout from './layouts/MainLayout/MainLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>} />

          <Route path="/search/:id" element={
          <MainLayout>
            <Search />
          </MainLayout>} />

          <Route path="/video" element={
          <MainLayout>
            <Video />
          </MainLayout>} />
          
          <Route path="/channel" element={
          <MainLayout>
            <Channel />
          </MainLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
