import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../Menu/Menu';
import About from '../About/About'
import DishDetail from '../DishDetail/DishDetail';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Contact from '../Contact/Contact'

// redux
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addComment } from '../../redux/actions/ActionCreators';

// redux
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

// redux
const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

const Main = (props) => { //props coming from redux

    const HomePage = () => {
        return(
            <Home 
                dish={props.dishes.filter(dish => dish.featured)[0]}
                promotion={props.promotions.filter(promo => promo.featured)[0]}
                leader={props.leaders.filter(leader => leader.featured)[0]}
            />
        );
    };
    
    const DishWithId = ({ match }) => {
        return(
            <DishDetail 
                dish={props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
                comments={props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                addComment={props.addComment}
            />
        );
    };

    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/aboutus" component={() => <About leaders={props.leaders} />} />
                <Route exact path="/menu" component={() => <Menu dishes={props.dishes}/>} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>
    );
}

// redux
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));