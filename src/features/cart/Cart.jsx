import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {cleareCart} from './cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getUserName } from './cartSlice';


function Cart() {
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch()
  
if(!cart.length) return (<EmptyCart />)
  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>
      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
      ))}

      </ul>

      <div className='mt-6 space-x-2'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={()=> dispatch(cleareCart())} >Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;