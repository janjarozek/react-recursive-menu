import React from 'react'
import { NavLink } from 'react-router-dom';
// import { NavLink, useNavigate } from 'react-router-dom';
import './navItem.scss';
import NavItemHeader from './NavItemHeader';

export default function NavItem( props ) {
    const { label, Icon, to, children } = props.item;
    // let navigate = useNavigate();

    if (children) {
        return <NavItemHeader item={props.item} />;
    }
    return (
        <NavLink
            exact
            to={to}
            className="navItem"
            activeClassName="activeNavItem"
            >
            <Icon className="navIcon" />
            <span className="navLabel">{label}</span>
        </NavLink>
    )
}
