import React from "react";
import {Col, Jumbotron} from "react-bootstrap";

class Welcome extends React.Component {

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        return (
            <Col xl={12}>
                <Jumbotron>
                    <h1>Welcome to my hood</h1>
                    <p>
                        You have successfully logged in!!!
                    </p>
                </Jumbotron>
            </Col>
        );
    }
}

export default Welcome;