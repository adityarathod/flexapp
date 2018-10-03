import React, { Component } from 'react';

class IntroScreenshots extends Component {
    render() {
        return (
            <section className="section has-text-centered">
                <div className="columns">
                    {this.props.images.map((img, idx) => {
                        return (
                            <div className="column" key={idx}>
                                <h1 className="title">{img.title}</h1>
                                <img src={img.data} alt='Screenshot' />
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default IntroScreenshots;
