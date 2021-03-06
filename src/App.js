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
import Dashboard from './Components/Dashboard/Dashboard';
import Myorders from './Components/Myorders/Myorders';
import Profile from './Components/Profile/Profile';

import Allusers from './Components/Users/Allusers';
import Makepayment from './Components/Makepayment/Makepayment';
import Manageorders from './Components/Manageorders/Manageorders';
import Manageproducts from './Components/Manageproducts/Manageproducts';
import Addproducts from './Components/Addproducts/Addproducts';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/purchase' element={<Purchase></Purchase>}></Route> */}
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/tools/:toolsID' element={<Toolsdetails></Toolsdetails>}></Route>
        <Route path='/purchase/:toolsID' element={<Requireauth><Purchase></Purchase></Requireauth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Requireauth><Dashboard></Dashboard></Requireauth>}>
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='users' element={<Allusers></Allusers>}></Route>
          <Route path='manageorders' element={<Manageorders></Manageorders>}></Route>
          <Route path='manageproducts' element={<Manageproducts></Manageproducts>}></Route>
          <Route path='addproducts' element={<Addproducts></Addproducts>}></Route>
          <Route path='payment/:toolsID' element={<Makepayment></Makepayment>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
