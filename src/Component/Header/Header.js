import React from 'react';

const Header = () => {
    return (
        <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Home Page</h1>
                        <h2 className="masthead-subheading mb-0">Learn ReactJS Everyday</h2>
                        <span className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</span>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>
    );
}

export default Header;

