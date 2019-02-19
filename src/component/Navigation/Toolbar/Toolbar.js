import React from 'react';
import './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="Logo">
          <h3>Canter Binge</h3>
        </div>
        <div></div>
    </header>
);

export default toolbar;