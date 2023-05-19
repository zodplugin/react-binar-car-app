import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home'
import Cars from './pages/Cars'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/cars" element={<Cars/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
