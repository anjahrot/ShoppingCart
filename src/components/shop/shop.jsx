import './shop.css'
import {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import addToCartImg from '../../assets/addToCart.png'

const Shop = () => {
    const [items, setItems] = useOutletContext();

    return (
      <div>
        <h1>Hello from shop page!</h1>
        <p>So, how are you? Ready to shop!</p>
        <div className='productGrid'>
          {items.map( (item) => (
            <ProductCard key={item.id} imageUrl={item.image} title={item.title} price={item.price} description={item.description} />       
          ))}
        </div>
      </div>
    );
  };

  const ProductCard = ({imageUrl, title, price, description}) => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [btnText, setBtnText] = useState('Show Product Info');

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
        <div className='addProduct'>
          <input className='inputField' 
            placeholder='0'
            aria-label='quantity of items'
            type='number'
            pattern='^[0-9]'
            step = '1'
            min = '0'
            name='quantity'
            defaultValue='0' />
          <img src={addToCartImg}></img>
        </div>
      </div>
    )
  } 
  
  export default Shop;