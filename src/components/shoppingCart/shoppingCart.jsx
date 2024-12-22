import { useOutletContext } from 'react-router-dom';
import './shoppingCart.css';
import { useState, useEffect } from 'react';

const ShoppingCart = () => {

    const [items, cartItems, setCartItems, updateCart] = useOutletContext();
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        let totalAmount = 0;
        for(let i=0; i<cartItems.length; i++) {
            totalAmount += cartItems[i].price * cartItems[i].quantity;
        }
        setTotal(totalAmount.toFixed(2));
    }, [cartItems]);
    

    function deleteItem (productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        updateCart();
    };

    return (
        <div>
            <h1>Your selected products:</h1> 
            <div className='gridContainerTotal'>
             <div className='productsIndividual'>
                {cartItems.map((item) => (
                    <Card key={item.id} product={item} quantity={item.quantity} deleteItem={deleteItem}/>
                ))}
             </div>
             <div className='totalOfProducts'>
                <div>
                   {cartItems.map((item) => (
                       <ListItem key={item.id} product={item} quantity={item.quantity} />
                    ))}
                </div>
                <div>------------------------------------------------------------------------------</div>
                <div className='totalLast'>
                    <h2 className='total'>Total amount: ${total}</h2>
                    <button>Check out</button>
                </div>
              </div>
            </div>
        </div>
     )
    };


    const Card = ({product, quantity, deleteItem}) => {
        return (
             <div className='cardSummary'>
                <img className='summaryImg' src={product.imgUrl} alt="" />
                <h3>{product.title}</h3>
                <div className='quantity&price'>
                    <h3>Quantity: {quantity}</h3>
                    <h3>Price per item: ${product.price}</h3>
                </div>
                <button className='deleteBtn' onClick={ () => deleteItem(product.id)}>Delete</button>
             </div>
        )
    };

    const ListItem = ({product, quantity}) => {
        return (
            <div className='totalItem'>
                <h3>{quantity}</h3>
                <h3>{product.title}</h3>
                <h3>Price: ${(product.price * quantity).toFixed(2)}</h3>
            </div>
        )
    };

export default ShoppingCart;