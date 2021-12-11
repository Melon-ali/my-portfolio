import React from 'react';

const Footer = () => {
    return (
        <div className="py-4  text-center">
            <p>&#169; {(new Date()).getFullYear()} Melon Ali. All Rights Reserved</p>
        </div>
    );
};

export default Footer;