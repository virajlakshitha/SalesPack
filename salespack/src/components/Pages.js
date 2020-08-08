import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import './Pages.css';

class Pages extends Component{
    render() {
        return(
            <div className="pages-app">
                <Card>
                    <Card.Body>
                        <Card.Title>Form</Card.Title>
                        <Card.Text>abc</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Pages;