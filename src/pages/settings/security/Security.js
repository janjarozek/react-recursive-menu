import React from 'react'
import Credentials from './Credentials'
import TwoFa from './TwoFa'

export default function Security() {
    return (
        <div>
            <h2>Security</h2>

            <TwoFa />
            <Credentials />
        </div>
    )
}
