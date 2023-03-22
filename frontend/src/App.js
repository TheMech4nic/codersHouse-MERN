import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  return <BrowserRouter>
    <Navigation />
    <Routes>
      
     <Route path="/" element={isAuth ? <Navigate to={"/rooms"} /> : <Home />} />
     <Route exact path='/authenticate' element={ isAuth ? <Navigate to={"/rooms"} /> : <Authenticate />} />
     <Route exact path='/activate' element={ !isAuth ? <Navigate to={"/"} /> : isAuth && !user.activated ? <Activate /> : <Navigate to={"/rooms"} /> } />
     <Route exact path='/rooms' element={ !isAuth ? <Navigate to={"/"} /> : isAuth && !user.activated ?  <Navigate to={"/activate"} /> : <Rooms /> } />

    </Routes>
  </BrowserRouter>
}


export default App;
