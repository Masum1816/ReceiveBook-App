import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import ReceipeFrom from './Components/ReceipeForm/ReceipeFrom';
import ReceipeView from './Components/ReceipeView/ReceipeView';
import ReceipeUpdate from './Components/ReceipeUpdate/ReceipeUpdate';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddData' element={<ReceipeFrom />} />
        <Route path='/ViewData' element={<ReceipeView />} />
        <Route path='/UpdateData' element={<ReceipeUpdate />} />
      </Routes>
    </>
  );
}

export default App;
