import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from 'redux/hook';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Main from 'pages/main/Main';

import 'assets/css/common.css';
import Signup from 'components/account/Signup';
import Login from 'components/account/Login';

function App() {
    const selectAccount = useAppSelector((state) => state.account);
    return (
        <>
            <Header></Header>
            {selectAccount.isAccount === true ? selectAccount.AccountType === 'login' ? <Login /> : <Signup /> : null}
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
