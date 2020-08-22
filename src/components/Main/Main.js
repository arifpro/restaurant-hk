import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes'


function Main() {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
    };

    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                <NavbarBrand href="/">Restaurant Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
            <DishDetail dish={DISHES.filter(dish => dish.id === selectedDish)[0]} />
        </div>
    );
}

export default Main;