import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar"
import { Outlet } from 'react-router-dom';

const App = () => {
  
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const quotedString = "women's clothing";
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(quotedString)}`;
    fetch(url)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json()
      })
      .then(json => setItems(json))
      .catch((error) => setError(error))
      .finally( () => setLoading(false));
    }, [] ) 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>
  
  function updateCart () {
    let items = 0;
    for(let i=0;i<cartItems.length;i++) {
      items += cartItems[i].quantity;
    }
    return items;
  }

  return (
    <>
      <Navbar updateCart={updateCart}/>
      <div className='container'>
        <Outlet context = {[items, cartItems, setCartItems, updateCart]}/>
      </div>
    </>
    
  );
};

export default App;

