import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/" activeClassName="activeroute">Home</NavLink>
            <NavLink to="/test" activeClassName="activeroute">Test</NavLink>
        </div>
    );
};

export default Navigation;