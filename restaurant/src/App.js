import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
