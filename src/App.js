import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from './pages/Feed/Feed';
import SearchFeed from './pages/SearchFeed/SearchFeed';
import Video from './pages/Video/Video';
import Channel from './pages/Channel/Channel';
import MainLayout from './layouts/MainLayout/MainLayout';
import OnlyHeader from './layouts/OnlyHeader/OnlyHeader';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MainLayout>
                                    <Feed />
                                </MainLayout>
                            }
                        />

                        <Route
                            path="/search/:searchTerm"
                            element={
                                <OnlyHeader>
                                    <SearchFeed />
                                </OnlyHeader>
                            }
                        />

                        <Route
                            path="/video/:id"
                            element={
                                <MainLayout>
                                    <Video />
                                </MainLayout>
                            }
                        />

                        <Route
                            path="/channel/:id"
                            element={
                                <MainLayout channel>
                                    <Channel />
                                </MainLayout>
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <OnlyHeader>
                                    <Login />
                                </OnlyHeader>
                            }
                        />
                    </Routes>
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
