import React, { Component } from 'react';

class IntroSidebar extends Component {
    render() {
        return (
            <section className="section has-background-light has-text-centered">
                <h1 className="title">{this.props.title}</h1>
                <p>{this.props.text}</p>
            </section>
        );
    }
}

export default IntroSidebar;
