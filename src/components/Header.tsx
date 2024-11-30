import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import {ItemInterface} from '../App'

interface ShowOrdersProps {
  deleteOrder: (id: number) => void,
  increase: (id: number) => void,
  decrease: (id: number) => void,
  orders: ItemInterface[];
}

const showOrders: React.FC<ShowOrdersProps> = ({ decrease, increase, deleteOrder, orders }) => {
  let summa = 0
  orders.forEach(el => {
    if (typeof el.priceTotal === 'number') {
      summa += (el.priceTotal)
    }
  });

  return (<div>
    {orders.map(el => (
      <Order   decrease={decrease } increase={increase} deleteOrder={deleteOrder} key={el.id} item={el}  />
    ))}
    <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}$</p>
    
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Додай товар у кошик</h2>
  </div>)
}

 const Header = (props: ShowOrdersProps) => {
  let [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <header>
      <div>
        <span className='logo'>Магазин ювелірних виробів</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
      </div>

      {cartOpen && (
        <div className='shop-cart'>
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
      <div className='presentation'></div>
    </header>
  );
}

export default  Header