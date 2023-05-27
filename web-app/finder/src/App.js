import React from 'react';
// import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import ForYou from './ForYou';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Upload from './Upload';
import AdminForm from './AdminForm';
import AboutUs from './About';


function App(){
  return(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/ForYou' Component={ForYou} />
        <Route path='/SignUp' Component={SignUp} />
        <Route path='/Login' Component={Login} />
        <Route path='/ForYou/About' Component={AboutUs} />
        <Route path= '/ForYou/Upload' Component={Upload}/>
        <Route path='/AdminForm' Component={AdminForm}/>
        <Route path='/Admin' Component={Admin}/>
      </Routes>
    </div>

  </BrowserRouter> 

    
  );
}

export default App;

