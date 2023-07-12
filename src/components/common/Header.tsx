import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { useAppDispatch } from 'redux/hook';

import { onAccount } from 'redux/slice/accountSlice';

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <Head>
            <div className="wrap">
                <div className="flexBox">
                    <div></div>
                    <h1>로고자리</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'?'}>공지사항</Link>
                            </li>
                            <li>
                                <Link to={'?'}>문의사항</Link>
                            </li>
                            <li
                                onClick={() => {
                                    dispatch(onAccount());
                                }}>
                                로그인
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Head>
    );
};

const Head = styled.header`
    padding: 15px 0px;
    div {
        flex: 1;
    }
    h1 {
        flex: 1;
        text-align: center;
    }
    nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
            li {
                padding: 0px 15px;
                cursor: pointer;
            }
        }
    }
`;

export default Header;
