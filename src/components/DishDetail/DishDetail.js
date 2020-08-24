import React, { useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

const RenderComments = ({ comments }) => {
    if (comments != null) {
        return (
            <div className="container">
                <CardTitle>Comments</CardTitle>
                {
                    comments.map(item => (
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

const DishDetail = ({ dish, comments }) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={comments} />
                </div>
            </div>
        </div>
    )
}

export default DishDetail;