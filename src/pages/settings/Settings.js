import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom';

import Account from './account/Account';
import Security from './security/Security';

export default function Settings() {
    let { path } = useMatch();
    return (
        <div>
            <h1>Settings Page</h1>
            <Routes>
                <Route path={`${path}/account`} element={ <Account /> }/>
                <Route path={`${path}/security`} element={ <Security /> }/>
            </Routes>
        </div>
    )
}
