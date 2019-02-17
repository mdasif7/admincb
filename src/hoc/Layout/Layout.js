import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <div className="content" >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Layout;