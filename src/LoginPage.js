import React from "react";
import {Form, Button, Col} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    isFormValid() {
        const {email, password} = this.state;
        return email.length > 0 && password.length > 0;
    }

    handleChange(e) {
        const target = e.target,
            name = target.name,
            value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Col xl={8} className={'login-form-container'}>
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      size={'lg'}
                                      value={this.state.email}
                                      onChange={this.handleChange}
                                      autoFocus
                                      name={'email'}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Enter password"
                                      size={'lg'}
                                      value={this.state.password}
                                      onChange={this.handleChange}
                                      name={'password'}
                        />
                    </Form.Group>
                    <LinkContainer to="/welcome">
                        <Button variant="primary" disabled={!this.isFormValid()}>
                            Submit
                        </Button>
                    </LinkContainer>
                </Form>
            </Col>
        )
    }
}

export {LoginPage as Login};