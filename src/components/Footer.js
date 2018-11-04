import React from 'react';

const Footer = () => (
    <footer className="footer has-text-centered">
        <div className="columns is-mobile">
            <div className="column has-text-right"><p className="heading" style={{ fontWeight: 'bold' }}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfqKsDqbSEO7Dy7JD_PkV9DhsxMYP_9pXj3qM6LRL1emIENgw/viewform?usp=sf_link">Send
					feedback &rarr;</a></p></div>
            <div className="column has-text-left"> <p className="heading" style={{ fontWeight: 'bold' }}><a href="../privacy.html">Privacy Policy →</a></p></div>
        </div>
        <p>FLEX &copy; 2018 <a href="https://applecrazy.github.io/">Aditya Rathod</a>. All rights reserved.</p>
        <p>Design consideration provided by Sidharth Khabiya and Vasant Chalemcherla.</p>
    </footer>
)

export default Footer;
