import {Route,Routes ,Outlet} from 'react-router-dom';
import AllMeetUpPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <>
    <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetUpPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <Outlet/>
    </>
  );
}

export default App;
