import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/settings/Settings'
import Credentials from './pages/settings/security/Credentials';
import TwoFa from './pages/settings/security/TwoFa';
import Account from './pages/settings/account/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/security/credentials" element={<Credentials />} />
            <Route path="/settings/security/2fa" element={<TwoFa />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
