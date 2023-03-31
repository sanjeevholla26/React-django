
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { } from 'bootstrap';
import Header from './components/header';
import Img from './components/img';
import Combine from './components/com-card';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/login'
import Getngo from './components/getngo';
import Eachngo from './components/eachngo';
import Reg from './components/reg';
import Addbutton from './components/addngo';
import Createngo from './components/createngo';
import Myngo from './components/myngo';
import Viewmyngo from './components/viewurngo';
import Bottomheader from './components/bottomheader';
import Viewprofile from './components/myprofile';
import Slider from './components/card-slider';

function App() {
  return (
    <div>
      <Header/>
      <Bottomheader />
      <Routes>
        <Route path='/' element={<div><div className='combine-img-but'><Img /> 
                                      <Addbutton/></div>
                                      <Combine />
                                      <Slider />
                                      </div>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/ngo-list' element={<Getngo/>} />
        <Route exact path='/ngo-list/:id' element={<Eachngo />} />
        <Route exact path='/reg' element={<Reg />} />
        <Route exact path='/Register-Ngo' element={<Createngo />} />
        <Route exact path='/myngo' element={<Viewmyngo />} />
        <Route exact path='/profile' element={<Viewprofile />} />
      </Routes>
    </div>
  );
}

export default App;
