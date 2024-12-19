import './shop.css'
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import addToCartImg from '../../assets/addToCart.png'

const Shop = () => {
    const [items, cartItems, setCartItems, updateCart] = useOutletContext();

    function addItemToCart (product, quantity) {
      setCartItems([
        ...cartItems, 
      { id: product.id, 
        title: product.title,
        price: product.price,
        imgUrl: product.image,
        quantity: quantity 
      },
      ]);
    }

  
    return (
      <div>
        <h1>Hello from shop page!</h1>
        <p>So, how are you? Ready to shop!</p>
        <div className='productGrid'>
          {items.map( (item) => (
            <ProductCard key={item.id} product={item} imageUrl={item.image} title={item.title} price={item.price} description={item.description} addToCart={addItemToCart} updateCart={updateCart}/>       
          ))}
        </div>
      </div>
    );
  };

  const ProductCard = ({product, imageUrl, title, price, description, addToCart, updateCart}) => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [btnText, setBtnText] = useState('Show Product Info');
    const [inputValue, setInputValue] = useState(0);

    function toggleMoreInfo () {
      if(!moreInfo) {
        setBtnText('Hide');
      } else {
        setBtnText('Show Product Info');
      }
      setMoreInfo(!moreInfo);
    }

  
    return (
      <div className='card'>
        <div className='imageAndInfo'>
          <img src={imageUrl} className='productImg'></img>
          <button className='showMoreBtn' onClick={() => toggleMoreInfo()}>{btnText}</button>
          {moreInfo && <p>{description}</p>}
        </div>
        <div className='titleAndPrice'>
          <h3 className='title'>{title}</h3>
          <h2 className='price'>Price: {price}</h2>
        </div>
        <form className='addProduct' onSubmit={(e) => {
          e.preventDefault();
          addToCart(product, inputValue);
          updateCart(); 
        }}>
          <input className='inputField' 
            placeholder={inputValue}
            aria-label='quantity of items'
            type='number'
            pattern='^[0-9]'
            step = '1'
            min = '0'
            name='quantity'
            onChange = {(e) => setInputValue(Number(e.target.value))} />
          <button className='addToCartBtn'>
            <img src={addToCartImg} alt='shopping cart icon'></img>
          </button>
        </form>
      </div>
    )
  } 
  
  export default Shop;