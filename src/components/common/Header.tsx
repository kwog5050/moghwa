import React from 'react';
import { useAppDispatch } from 'redux/hook';
import { onAccount } from 'redux/slice/accountSlice';

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <header>
            헤더~★
            <button
                onClick={() => {
                    dispatch(onAccount());
                }}>
                로그인창 켜줘!!
            </button>
        </header>
    );
};

export default Header;
