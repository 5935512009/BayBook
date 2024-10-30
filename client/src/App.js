import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <div className="hero">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
