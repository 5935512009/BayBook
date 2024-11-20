import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Blogs from './pages/blog/Blogs';
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';
function App() {
  return (
    <div className="App">
      <div className="">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Blogs' element={<Blogs/>} />
            <Route path='/Shop'  element={<Shop/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
