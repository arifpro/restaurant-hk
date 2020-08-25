import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        telNum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
    });
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        telNum: false,
        email: false
    });
    // console.log(user)

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setUser({
            firstName: 'firstName' === name ? value : user.firstName,
            lastName: 'lastName' === name ? value : user.lastName,
            telNum: 'telNum' === name ? value : user.telNum,
            email: 'email' === name ? value : user.email,
            agree: 'agree' === name ? value : user.agree,
            contactType: 'contactType' === name ? value : user.contactType,
            message: 'message' === name ? value : user.message
        })
    };

    const handleSubmit = (event) => {
        console.log("Current State is: " + JSON.stringify(user))
        alert("Current State is: " + JSON.stringify(user))
        event.preventDefault();
    };

    const handleBlur = (field) => (evt) => {
        setTouched({ ...touched, [field]: true })
    };

    const validate = (firstName, lastName, telNum, email) => {
        const errors = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: ''
        };

        if (touched.firstName && firstName.length < 3) {
            errors.firstName = 'First Name should be >= 3 characters';
        } else if (touched.firstName && firstName.length > 10) {
            errors.firstName = 'First Name should be <= 10 characters';
        }

        if (touched.lastName && lastName.length < 3) {
            errors.lastName = 'Last Name should be >= 3 characters';
        } else if (touched.lastName && lastName.length > 10) {
            errors.lastName = 'Last Name should be <= 10 characters';
        }

        const reg = /^\d+$/;
        if (touched.telNum && !reg.test(telNum)) {
            errors.telNum = 'Tel. Number should contain only numbers';
        }

        if (touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    const errors = validate(user.firstName, user.lastName, user.telNum, user.email);

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>

            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="tel:+85212345678"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    value={user.firstName} 
                                    valid={errors.firstName === ''}
                                    invalid={errors.firstName !== ''}
                                    onBlur={handleBlur('firstName')}
                                    onChange={handleInputChange} 
                                />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={user.lastName} 
                                    valid={errors.lastName === ''}
                                    invalid={errors.lastName !== ''}
                                    onBlur={handleBlur('lastName')}
                                    onChange={handleInputChange} 
                                />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="telNum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input 
                                    type="tel" 
                                    id="telNum" 
                                    name="telNum" 
                                    placeholder="Tel. Number" 
                                    value={user.telNum} 
                                    valid={errors.telNum === ''}
                                    invalid={errors.telNum !== ''}
                                    onBlur={handleBlur('telNum')}
                                    onChange={handleInputChange} 
                                />
                                <FormFeedback>{errors.telNum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={user.email} 
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={handleBlur('email')}
                                    onChange={handleInputChange} 
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                            type="checkbox" 
                                            name="agree" 
                                            checked={user.agree} 
                                            onChange={handleInputChange} 
                                        /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input 
                                    type="select" 
                                    name="contactType" 
                                    value={user.contactType} 
                                    onChange={handleInputChange}
                                >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input 
                                    type="textarea" 
                                    id="message" 
                                    name="message" 
                                    rows="12" 
                                    value={user.message} 
                                    onChange={handleInputChange} 
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;