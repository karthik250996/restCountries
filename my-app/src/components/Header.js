import React from 'react';
import { toggleMode } from '../actions';
import {connect} from 'react-redux';

const Header = (props) => (
    <div className={`header ` + props.mode}>
        Where in the world
        <div className="header__mode" onClick={() => {props.dispatch(toggleMode())}}>
        {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    mode: state.mode,
});

export default connect(mapStateToProps)(Header);
