import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from 'pages/account/Signup';

const Account = () => {
    return (
        <>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
};

export default Account;
