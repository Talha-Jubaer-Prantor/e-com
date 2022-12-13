import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProductDet from './components/ProductDetails/ProductDet';
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/productdetails' element={<ProductDet></ProductDet>}></Route>
        </Routes>

          


    </div>
  );
}

export default App;
