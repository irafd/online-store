import React from 'react';
import {ItemInterface} from '../App'

interface Ppops {
item: ItemInterface;
    onShowItem: (item: ItemInterface) => void;
    onAdd: (item: ItemInterface) => void;   
    onCloseFullItem: () => void
}

const Item: React.FC<Ppops> = ({ onAdd, item, onShowItem, onCloseFullItem }) => {
    return (
        <div className='item'>
            <img 
                src={`./img/${item.img}`} 
                alt="items"
                width={20} 
                height={300}
                onClick={() => onShowItem(item)} 
            />
            <h2 onClick={() => onShowItem(item)}>{item.title}</h2>
            <p onClick={() => onShowItem(item)}>{item.description}</p>
            <b onClick={() => onShowItem(item)}>{item.price}$</b>
            <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
            <button onClick={onCloseFullItem}></button>
        </div>
    );
}

export default Item;

