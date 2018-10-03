import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer has-text-centered">
                <p className="heading" style={{ fontWeight: 'bold' }}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfqKsDqbSEO7Dy7JD_PkV9DhsxMYP_9pXj3qM6LRL1emIENgw/viewform?usp=sf_link">Send
					feedback &rarr;</a></p>
                <p>FLEX &copy; 2018 <a href="https://applecrazy.github.io/">Aditya Rathod</a>. All rights reserved.</p>
                <p>Design consideration provided by Sidharth Khabiya and Vasant Chalemcherla.</p>
            </footer>
        );
    }
}

export default Footer;
