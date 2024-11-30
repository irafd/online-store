import React from 'react';
import Item from './Item';
import {ItemInterface} from '../App'

export interface Props {
items: ItemInterface[];
    onShowItem: (item: ItemInterface) => void;
    onAdd: (item: ItemInterface) => void;  
    onCloseFullItem: () => void;
}

const Items: React.FC<Props> = ({ items, onShowItem, onAdd, onCloseFullItem }) => {
    return (
        <main>
            {items.map(el => (
                <Item onShowItem={onShowItem} key={el.id} item={el} onAdd={onAdd} onCloseFullItem={onCloseFullItem} />
            ))}
        </main>
    );
};

export default Items;

