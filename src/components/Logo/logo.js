import React from 'react';
import "./logo.css";
import {Card, CardImg} from 'reactstrap';

const Logo = (props) => {
    return (
        <div id="logo">
            <Card>
                <CardImg src={require('../Images/skilllogo1.png')} responsive id="img"/>
            </Card>
        </div>
    );
};

export default Logo;