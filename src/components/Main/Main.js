import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';



function Main() {
    const [selectedDish, setSelectedDish] = useState(null);

    // const onDishSelect = (dishId) => {
    //     setSelectedDish(dishId);
    // };
    const HomePage = () => <Home />

    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={DISHES}/>} />
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;