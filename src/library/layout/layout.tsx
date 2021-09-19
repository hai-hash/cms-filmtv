import React from 'react'
import Menu from './menu'
import Body from './body'
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";

export default function Layout(){
    return (
        <>
        <Router>
            <Row>
                <Col xs="2">
                    <Menu/>
                </Col>
                <Col xs="10">
                    <Body/>
                </Col>
            </Row>
        </Router>
        </>
    )
}
