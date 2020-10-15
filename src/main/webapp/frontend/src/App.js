import React, {Component} from "react";
import PostsComponent from "./components/PostsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Button, Form} from "react-bootstrap";

const styles = {
    h1: {
        float: 'left'
    },
    h3: {
        float: 'left'
    },
    ul: {
        listStyle: 'none'
    }
};

export class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#">Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#posts">Posts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline>
                            <Form.Control type="text" placeholder="Search post" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar>
                </header>
                <main>
                    <PostsComponent/>
                </main>
            </div>
        )
    }
}

export default App;
