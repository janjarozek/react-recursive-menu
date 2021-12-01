import React from 'react'
import { sideMenu } from './menu.config'
import NavItem from './navItem/NavItem';

import './sidebar.scss'

export default function Sidebar() {
    return (
        <nav className="sidebar">
            {sideMenu.map((item, index) => {
                return <NavItem key={`${item.label}-${index}`} item={item} />;
            })}
        </nav>
    )
}
