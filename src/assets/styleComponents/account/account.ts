import { styled } from 'styled-components';

export const AccountForm = styled.form`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
        position: relative;
        z-index: 1;
        background-color: #fff;
        width: 97%;
        max-width: 500px;
        padding: 30px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-top: 7px solid #7d65ff;
        border-radius: 7px;
        h2 {
            text-align: center;
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 20px;
        }
        input {
            border: 1px solid #aaa;
            padding: 10px 5px;
            border-radius: 5px;
        }
        .buttons {
            display: flex;
            flex-direction: column;
            gap: 5px;
            button {
                background-color: #7d65ff;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                padding: 10px 0px;
                border-radius: 5px;
                cursor: pointer;
            }
            div {
                display: flex;
                gap: 5px;
                button {
                    flex: 1;
                }
            }
        }
    }
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00000088;
    }
`;
