import React, { Component } from 'react'

import './styles.scss'

export default class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="layout">
                <header className="header"></header>
                <aside className="aside"></aside>
                <main className="main">{children}</main>
                <footer className="footer"></footer>
            </div>
        )
    }
}
