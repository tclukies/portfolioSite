import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MenuExampleInvertedPointing extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu inverted pointing vertical>
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Item
                    name="development"
                    active={activeItem === "development"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/development"
                />
                <Menu.Item
                    name="resume"
                    active={activeItem === "resume"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/resume"
                />
                <Menu.Item
                    name="blog"
                    active={activeItem === "blog"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/blog"
                />
                <Menu.Item
                    name="photography"
                    active={activeItem === "photography"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/photography"
                />
                <Menu.Item
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/contact"
                />
            </Menu>
        );
    }
}
