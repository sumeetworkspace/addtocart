import './Cart.css';
import Card from './Card';

let Cart = ({cartItems=[]}) =>{
    return(
        <div className='Cart'>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items added yet.</p>
            ):(
            cartItems.map((item,index)=>(
                <div key={index} className='AddedCarts'>
                <Card  
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                info={item.info}
                showButton={false}
                />
                </div>
            )) 
            )}
        </div>
    )
}
export default Cart;