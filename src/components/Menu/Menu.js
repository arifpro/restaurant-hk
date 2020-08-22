import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from '../DishDetail/DishDetail';

const Menu = ({ dishes }) => {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish);
    };

    const renderDish = (dish) => {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            ) 
        } else {
            return (
                <div></div>
            )
        }
    };

    const renderDishDetail = (dish) => {
        if (dish != null) {
            return (
                <div>
                    <CardTitle>Comments</CardTitle>
                    {
                        dish.comments.map(item => (
                            <CardBody key={item.id}>
                                <CardText>{item.comment}</CardText>
                                <CardText>-- {item.author} , {item.date}</CardText>
                            </CardBody>
                        ))
                    }
                </div>
            ) 
        } else {
            return (
                <div></div>
            )
        }
    };

    const menu = dishes.map(dish => (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    );

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <DishDetail 
                renderDish={renderDish} 
                renderDishDetail={renderDishDetail}
                selectedDish={selectedDish} 
            />
        </div>
    );
}

export default Menu;