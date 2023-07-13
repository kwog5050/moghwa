import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { useAppDispatch } from 'redux/hook';

import { onAccount } from 'redux/slice/accountSlice';

import logo from 'assets/images/logo.png';

const Header = () => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState(sessionStorage.getItem('userId'));

    const logout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userToken');
        setId(null);
    };

    useEffect(() => {}, [id]);

    return (
        <Head>
            <div className="wrap">
                <div className="flexBox">
                    <div className="pc"></div>
                    <h1>
                        <img src={logo} alt="" />
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/notice/1'}>공지사항</Link>
                            </li>
                            <li>
                                <Link to={'/contact/1'}>문의사항</Link>
                            </li>
                            {id !== null ? (
                                <li onClick={logout}>로그아웃</li>
                            ) : (
                                <li
                                    onClick={() => {
                                        dispatch(onAccount());
                                    }}>
                                    로그인
                                </li>
                            )}
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
                position: relative;
                &:hover {
                    color: #bae148;
                    &::after {
                        content: '';
                        width: 8px;
                        height: 8px;
                        background-color: #bae148;
                        position: absolute;
                        top: -5px;
                        left: 5px;
                        border-radius: 50%;
                    }
                    a {
                        color: #bae148;
                    }
                }
            }
        }
    }
    @media (max-width: 1200px) {
        h1 {
            text-align: left;
            flex: auto;
        }
        nav {
            justify-content: end;
            flex: auto;
        }
    }
`;

export default Header;
