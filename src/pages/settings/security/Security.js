import React from 'react'
import Credentials from './Credentials'
import TwoFa from './TwoFa'

export default function Security() {
    return (
        <div>
            <h1>Security</h1>

            <TwoFa />
            <Credentials />
        </div>
    )
}
