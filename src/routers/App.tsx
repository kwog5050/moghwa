import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux/hook';

import { tokenCheck } from 'apis/token';

import Main from 'pages/main/Main';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Signup from 'components/account/Signup';
import Login from 'components/account/Login';
import List from 'components/board/List';
import Detail from 'components/board/Detail';
import Create from 'components/board/Create';
import Error from 'components/error/Error';
import NotFoundPage from 'components/error/NotFoundPage';

import 'assets/css/common.css';
function App() {
    const nav = useNavigate();
    const location = useLocation();
    const selectAccount = useAppSelector((state) => state.account);
    const [isError, setIsError] = useState(false);

    const errorCheck = (): void => {
        const erorrRegex = /.*error.*/;
        if (erorrRegex.test(location.pathname)) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    useEffect(() => {
        errorCheck();
        !isError && tokenCheck();
    }, [nav]);

    return (
        <>
            {!isError && <Header></Header>}
            {selectAccount.isAccount === true ? selectAccount.AccountType === 'login' ? <Login /> : <Signup /> : null}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:boardType/:boardPage" element={<List />} />
                <Route path="/boardDetail/:boardType/:boardPage" element={<Detail />} />
                <Route path="/:boardType/write" element={<Create />} />
                <Route path="/error" element={<Error />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            {!isError && <Footer></Footer>}
        </>
    );
}

export default App;
