import React, { useState,useEffect, FC } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export interface ItemInterface {
  id: number;
  title: string;
  price: number;
  priceTotal: number;
  description: string;
  category: string;
  img: string;
  count: number;
  alt: string;
}

const App: FC = () => {
  const items: ItemInterface[] = [
    {
      id: 1,
      title: "Золотий браслет",
      price: 550,
      priceTotal: 550,
      description: "Середня вага: 2.8. Вставка: цирконій. Ширина: 0,2 см. Метал: Золото. Проба: 585°. Колір металу: Жовтий",
      category: "bracelets",
      img: "gold bracelets.jpg",
      count: 1,
      alt: "item"
    },
    {
      id: 2,
      title: "Браслет біле золото",
      price: 650,
      priceTotal: 650,
      description: "Середня вага: 1.8. Вставка: цирконій. Ширина: 0,3 см. Метал: Золото. Проба: 585°. Колір металу: Білий",
      category: "bracelets",
      img: "silver bracelets.jpg",
      count: 1,
      alt: "item"
    },
    {
      id: 3,
      "title": "Золотий підвіс Слава Україні ",
      price: 1100,
      priceTotal: 1100,
      "description": "Середня вага: 4. Вставка: без каміння. Ширина: 0,3 см. Метал: Золото. Проба: 585°. Колір металу: Жовтий",
      "category": "coulomb",
      "img": "gold coulomb.jpg",
      count: 1,
      alt: "item"
     
    },
    {
    id: 4,
      "title": "Золотий підвіс ",
      price: 1000,
      priceTotal: 1000,
      "description": "Середня вага: 3. Вставка: без каміння. Висота: 2.5см. Метал: Золото. Проба: 585°. Колір металу: Жовтий",
      "category": "coulomb",
      "img": "mix coulomb.jpg",
      count: 1, 
      alt: "item"
    
    },
    {
      id: 5,
      "title": "Сережки біле золото",
      price: 650,
      priceTotal: 650,
      "description": "Середня вага:1.6. Вставка: Діамант.  Метал :Золото. Проба :585°. Колір металу :Білий",
      "category": "earrings",
      "img": "silver earrings.jpg",
      count: 1,
      alt: "item"

    },
    {
      id: 6,
      "title": "Сережки",
      price: 700,
      priceTotal: 700,
      "description": "Середня вага:1.3. Вставка: Діамант.  Метал :Золото. Проба :585°. Колір металу :Білий",
      "category": "earrings",
      "img": "earrings.jpg",
      count: 1,
      alt: "item"
      
    },
    {
      id: 7,
      "title": "Обручка з діамантом",
      price: 1050,
      priceTotal: 1050,
      "description": "Середня вага вставки: 0,06 кар. Вставка: Діамант.  Метал: Золото. Проба: 585°. Колір металу: Комбінований",
      "category": "ring",
      "img": "ring diamand.jpg",
      count: 1,
      alt: "item",
    },
    {
      id: 8,
      "title": "Обручка біле золото",
      price: 1150,
      priceTotal: 1150,
      "description": "Вставка: Діамант. Метал: Золото. Ширина: 0.5cм. Проба :585°. Колір металу: Білий",
      "category": "ring",
      "img": "ring.jpg",
      count: 1,
      alt: "item"
    },
    
    {
    id: 9,
    "title": "Золотий годинник",
    price: 1450,
    priceTotal: 1450,
    "description": "Основна вставка: без каміння. Ширина:4см. Метал: Золото. Колір металу: Жовтий",
    "category": "clock",
    "img": "gold clock.jpg",
      count: 1,
    alt: "item"
  }
  ];

  const [orders, setOrders] = useState<ItemInterface[]>([]);
  const [currentItems, setCurrentItems] = useState<ItemInterface[]>([]);
  const [showFullItem, setShowFullItem] = useState<boolean>(false);
  const [fullItem, setFullItem] = useState<ItemInterface | {}>({});

  const increase = (id: number): void => {
    setOrders(orders.map(item =>
      (item.id === id) ?
        {
          ...item, count: item.count + 1,
          priceTotal: (item.count + 1) * item.price
        } : item
    ));
  };

  const decrease = (id: number): void => {
    setOrders(orders.map(item =>
      (item.id === id && item.count > 1) ?
        {
          ...item, count: item.count - 1 > 1 ? item.count - 1 : 1,
          priceTotal: (item.count - 1 > 1 ? --item.count : 1) * item.price
        } : item
    ));
  };

  const onShowItem = (item: ItemInterface): void => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };
const onCloseFullItem: () => void = () => {
    setShowFullItem(false);
}

useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (showFullItem && event.target instanceof Element && !event.target.closest('.item')) {
        onCloseFullItem();
      }
    }

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    }
}, [showFullItem]);




  const chooseCategory = (category: string): void => {
    if (category === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter(el => el.category === category));
  };

  const deleteOrder = (id: number): void => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const addToOrder = (item: ItemInterface): void => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    });
    if (!isInArray)
      setOrders([...orders, item]);
  };

  return (
    <div className="wrapper">
      <Header decrease={decrease} increase={increase} orders={orders} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} onCloseFullItem={onCloseFullItem}  />
      {showFullItem && <ShowFullItem onAdd={addToOrder}  onShowItem={onShowItem} item={fullItem as ItemInterface} />}
      <Footer />
    </div>
  );
};

export default App;