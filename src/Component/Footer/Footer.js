import React from 'react';

const Footer = ({copyright}) => {
    return (
        <div>
            <footer className="py-5 bg-black">
                <div className="container">
                    <p className="m-0 text-center text-white small">{copyright}</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
