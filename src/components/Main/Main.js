import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main() {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
    };

    return (
        <div>
            <Header/>
            <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
            <DishDetail dish={DISHES.filter(dish => dish.id === selectedDish)[0]} />
            <Footer/>
        </div>
    );
}

export default Main;