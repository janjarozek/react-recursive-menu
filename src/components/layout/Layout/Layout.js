import React, { Component } from 'react'
import Sidebar from '../../sidebar';

import './styles.scss'

export default class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="layout">
                <header className="header"></header>
                <aside className="aside">
                    <Sidebar />
                </aside>
                <main className="main">{children}</main>
                <footer className="footer"></footer>
            </div>
        )
    }
}
