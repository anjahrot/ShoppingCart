import './shop.css'
import {useState} from 'react';
import { useOutletContext } from 'react-router-dom';

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
    const [btnText, setBtnText] = useState('Product Info');

    function toggleMoreInfo () {
      if(!moreInfo) {
        setBtnText('Hide');
      } else {
        setBtnText('Product Info');
      }
      setMoreInfo(!moreInfo);
    }

    return (
      <div className='card'>
        <img src={imageUrl}></img>
        <h3>{title}</h3>
        <h2>{price}</h2>
        <button onClick={() => toggleMoreInfo()}>{btnText}</button>
        {moreInfo && <p>{description}</p>}
      </div>
    )
  } 
  
  export default Shop;