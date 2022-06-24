import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import ItemDetails from './components/ItemDetails'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home/:id" element={<ItemDetails/>}></Route>
  </Routes>
  );
}

export default App;
