import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux/hook';

import { tokenCheck } from 'apis/token';

import Main from 'pages/main/Main';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Signup from 'components/account/Signup';
import Login from 'components/account/Login';
import List from 'components/board/List';
import Detail from 'components/board/Detail';

import 'assets/css/common.css';

function App() {
    const nav = useNavigate();
    const selectAccount = useAppSelector((state) => state.account);

    useEffect(() => {
        tokenCheck();
    }, [nav]);

    return (
        <>
            <Header></Header>
            {selectAccount.isAccount === true ? selectAccount.AccountType === 'login' ? <Login /> : <Signup /> : null}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:boardType/:boardPage" element={<List />} />
                <Route path="/boardDetail/:boardType/:boardPage" element={<Detail />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
