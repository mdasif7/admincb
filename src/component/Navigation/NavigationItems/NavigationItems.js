import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Link1</NavigationItem>
        <NavigationItem link="/">Link2</NavigationItem>
    </ul>
);

export default navigationItems;