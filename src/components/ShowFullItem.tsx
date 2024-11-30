import React from 'react'
import {ItemInterface} from '../App'

interface Props {
  item:  ItemInterface ;
    onShowItem: (item: ItemInterface) => void;
    onAdd: (item: ItemInterface) => void;
}

const ShowFullItem: React.FC<Props> = ({item, onShowItem, onAdd}) => {
    return (
      <div className='full-item'>
        <div>
          <img src={"./img/" + item.img} alt={item.alt} onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price}$</b>
            <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
        
        </div>
        </div>
    )
  }


export default ShowFullItem
