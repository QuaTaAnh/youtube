import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Feed from './pages/Feed/Feed';
import SearchFeed from './pages/SearchFeed/SearchFeed';
import Video from './pages/Video/Video';
import Channel from './pages/Channel/Channel';
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

          <Route path="/search/:searchTerm" element={
          <OnlyHeader>
            <SearchFeed />
          </OnlyHeader>} />

          <Route path="/video/:id" element={
          <MainLayout>
            <Video />
          </MainLayout>} />
          
          <Route path="/channel/:id" element={
          <MainLayout channel>
            <Channel />
          </MainLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
