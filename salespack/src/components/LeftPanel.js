import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import './LeftPanel.css';

class LeftPanel extends Component{
    render() {
        return(
            <div className="left-panel-app">
                <Nav  className="flex-column">
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="link-3">Link</Nav.Link>
                </Nav>
            </div>
        );
    }
}

export default LeftPanel;