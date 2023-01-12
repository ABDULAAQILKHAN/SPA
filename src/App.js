
import Nav from './MainComponenets/Nav';
import Home from './MainComponenets/Home';
import About from './MainComponenets/About';
import Products from './MainComponenets/Products';
import Store from './MainComponenets/Store';
import Footer from './MainComponenets/Footer';
import Order from './MainComponenets/Order';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <hr></hr>
      <BrowserRouter>
      <Nav/>
      
      <Routes>
      <Route path="/SPA" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
      <Route path="/order" element={<Order/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
