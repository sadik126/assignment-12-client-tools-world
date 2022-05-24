import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Review from './Components/Review/Review';
import Login from './Components/Login/Login';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
