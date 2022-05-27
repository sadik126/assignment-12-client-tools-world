import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Review from './Components/Review/Review';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Tools from './Components/Tools/Tools';
import Signup from './Components/Signup/Signup';
import Toolsdetails from './Components/Tools/Toolsdetails';
import Requireauth from './Components/Requireauth/Requireauth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/purchase' element={<Purchase></Purchase>}></Route> */}
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/tools/:toolsID' element={<Toolsdetails></Toolsdetails>}></Route>
        <Route path='/purchase/:toolsID' element={<Requireauth><Purchase></Purchase></Requireauth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
