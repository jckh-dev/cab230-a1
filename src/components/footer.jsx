import React from 'react';

const Footer = () => {
    return (
        <footer>
                <nav className="nav nav-pills flex-sm-row justify-content-around ">
                    <a className="flex-sm-fill text-center nav-link" aria-current="page" href="/index.html">Home</a>
                    <a className="flex-sm-fill text-center nav-link" href="underConstruction.html">About</a>
                    <a className="flex-sm-fill text-center nav-link" href="underConstruction.html">Sitemap</a>
                    <a className="flex-sm-fill text-center nav-link" href="underConstruction.html" tabindex="-1">Privacy</a>
                </nav>
        </footer>
    );
};

export default Footer;