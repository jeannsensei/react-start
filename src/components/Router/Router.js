import React from 'react'
import PropTypes from 'prop-types'
import styles from './Router.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

/**
 * Router
 * npm install react-router-dom
 * TODO: https://reactrouter.com/web/guides/quick-start
 */

class Navigation extends React.Component {
    componentDidMount() {
        /**
         * Helmet
         * npm install --save react-helmet
         */
        document.title = 'Amazing Page'
    }
    render() {
        return (
            <Router>
                {/* Navbar */}
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="RouterNavLink" as={Link} to="/">
                                Home
                            </Nav.Link>

                            <Nav.Link id="RouterNavLink" as={Link} to="/about">
                                Home
                            </Nav.Link>

                            <Nav.Link href="">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                {/* // Navbar */}
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <Header />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Navigation

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}

Router.propTypes = {}

Router.defaultProps = {}
