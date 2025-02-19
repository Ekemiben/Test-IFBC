import logo from './logo.svg';
import './App.css';
import Laning from './components/landing/Laning';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Professionals from './components/professional/Professionals';
import Footer from './components/footer/Footer';
import RegistrationForm from './components/registration/Registration';
import Application from './components/application/Application';

function App() {
  return (
    

    <div>
      
     
       <Router>
       
     <Navbar />
        <Routes>
          <Route exact path='/' element={<Laning />}></Route>
          <Route path='/professionals' element={<Professionals />}></Route>
          <Route path='/registration' element={<RegistrationForm />}></Route>
          <Route path='/application' element={<Application />}></Route>
         
        </Routes> 
        <Footer />
      </Router>
    
     
      
</div>
  
 


  );
}

export default App;
