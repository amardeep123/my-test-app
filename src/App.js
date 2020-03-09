import React from 'react';
import Navheader from './Navheader';
import {Login} from './LoginPage';
import {Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <>
                <Navheader/>
                <Container>
                    <Row>
                        <Switch>
                            <Route path="/home">
                                <Col xl={12}>Home</Col>
                            </Route>
                            <Route path="/about">
                                <Col xl={12}>About</Col>
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/welcome">
                                <Welcome/>
                            </Route>
                        </Switch>
                    </Row>
                </Container>
            </>
        )
    }
}

export default App;
