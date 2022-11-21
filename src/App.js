import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Feed from './pages/Feed';
import Search from './pages/Search';
import Video from './pages/Video';
import Channel from './pages/Channel';
import MainLayout from './layouts/MainLayout/MainLayout';
import OnlyHeader from './layouts/OnlyHeader/OnlyHeader';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
          <MainLayout>
            <Feed />
          </MainLayout>} />

          <Route path="/search/:id" element={
          <OnlyHeader>
            <Search />
          </OnlyHeader>} />

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
