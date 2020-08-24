import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Contact from '../Contact/Contact'
import { DISHES } from '../../shared/dishes'
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';

const Main = () => {

    const HomePage = () => {
        return(
            <Home 
                dish={DISHES.filter(dish => dish.featured)[0]}
                promotion={PROMOTIONS.filter(promo => promo.featured)[0]}
                leader={LEADERS.filter(leader => leader.featured)[0]}
            />
        );
    };
    
    const DishWithId = ({ match }) => {
        return(
            <DishDetail 
                dish={DISHES.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
                comments={COMMENTS.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
            />
        );
    };

    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={DISHES}/>} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;