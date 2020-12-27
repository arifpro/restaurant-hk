import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

// redux form
import { Control, LocalForm, Errors } from 'react-redux-form';

// redux form validator
const required = val => val && val.length;
const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => (val) && (val.length >= len);

const CommentForm = (props) => {

    const handleComment = (values) => {
        props.toggleModal();
        // console.log("Current State is: " + JSON.stringify(values));
        // alert("Current State is: " + JSON.stringify(values));
        props.addComment(props.dishId, values.rating, values.author, values.comment);
    }

    return (
        <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm model="user" onSubmit={values => handleComment(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Col md={12}>
                            <Control.select 
                                model=".rating" 
                                name="rating" 
                                className="form-control"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="author" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text 
                                model=".author" 
                                id="author" 
                                name="author" 
                                placeholder="Your Name" 
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(3), 
                                    maxLength: maxLength(15)
                                }}
                                validateOn="change"
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea 
                                model=".comment" 
                                id="comment" 
                                name="comment" 
                                rows="6" 
                                className="form-control" 
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col md={{size: 12}}>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}

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

const RenderComments = ({ comments, addComment, dishId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

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
                <Button className="submitComment" outline onClick={toggleModal}><span class="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <CommentForm
                    toggleModal={toggleModal}
                    isModalOpen={isModalOpen}
                    dishId={dishId}
                    addComment={addComment}
                />
            </div>
        ) 
    } else {
        return (
            <div></div>
        )
    }
};

const DishDetail = ({ dish, comments, addComment }) => {
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
                    <RenderComments
                        comments={comments}
                        addComment={addComment}
                        dishId={dish.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default DishDetail;