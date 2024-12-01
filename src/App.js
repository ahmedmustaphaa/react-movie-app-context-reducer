import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router';
import Watchlist from './watchlist/Watchlist';
import Watched from './watched/Watched';
import Add from './add/Add';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/' element={<Watchlist/>}></Route>
      <Route path='/watched' element={<Watched/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
