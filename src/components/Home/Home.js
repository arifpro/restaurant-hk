import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from '../Loading/Loading';


const RenderCard = ({ item, isLoading, errMess }) => {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return (
            <>
            { item &&
                <Card>
                        <CardImg src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                            <CardText>{item.description}</CardText>
                        </CardBody>
                </Card>
            }
            </>
        );
};

const Home = ({ dish, dishesLoading, dishesErrMess, promotion, leader }) => {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader} />
                </div>
            </div>
            <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess}  />
        </div>
    );
};

export default Home;
