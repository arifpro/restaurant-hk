import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const Menu = ({ dishes }) => {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish);
        console.log(dish);
    };

    const renderDish = (dish) => {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="50%" src={dish.image} alt={dish.name} />
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

    const menu = dishes.map(dish => (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onDishSelect(dish)}>
                    <CardImg width="50%" src={dish.image} alt={dish.name} />
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
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(selectedDish)}
                </div>
            </div>
        </div>
    );
}

export default Menu;