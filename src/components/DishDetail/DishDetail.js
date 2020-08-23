import React, { useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const RenderDish = ({ dish }) => {
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

const RenderComments = ({ dish }) => {
    if (dish != null) {
        return (
            <div className="container">
                <CardTitle>Comments</CardTitle>
                {
                    dish.comments.map(item => (
                        <CardBody key={item.id}>
                            <CardText>{item.comment}</CardText>
                            <CardText>-- {item.author} , {
                                    new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))
                                }
                            </CardText>
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

const DishDetail = ({ dish }) => {

    // const renderDish = (dish) => {
    //     if (dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         ) 
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // };

    // const renderComments = (dish) => {
    //     if (dish != null) {
    //         return (
    //             <div className="container">
    //                 <CardTitle>Comments</CardTitle>
    //                 {
    //                     dish.comments.map(item => (
    //                         <CardBody key={item.id}>
    //                             <CardText>{item.comment}</CardText>
    //                             <CardText>-- {item.author} , {
    //                                     new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))
    //                                 }
    //                             </CardText>
    //                         </CardBody>
    //                     ))
    //                 }
    //             </div>
    //         ) 
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // };

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {/* {renderDish(dish)} */}
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    {/* {renderComments(dish)} */}
                    <RenderComments dish={dish} />
                </div>
            </div>
        </div>
    )
}

export default DishDetail;