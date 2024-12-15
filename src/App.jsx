import './App.css'
import Navbar from "./components/navbar/navbar"
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
    
  );
};

export default App;
