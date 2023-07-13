import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 100px 0px;
    h2 {
        font-size: 40px;
        margin-bottom: 20px;
        text-align: center;
    }
    .title {
        margin: 30px 0px;
        border: 1px solid #aaa;
        ul {
            li {
                display: grid;
                grid-template-columns: 150px 1fr;
                div {
                    line-height: 50px;
                    &:nth-child(1) {
                        text-align: center;
                        background-color: #f8f8f8;
                        font-weight: bold;
                        font-size: 16px;
                        color: #909090;
                    }
                    &:nth-child(2) {
                        font-weight: bold;
                        font-size: 16px;
                        padding: 0px 20px;
                    }
                }
                &:not(:first-child) {
                    border-top: 1px solid #f8f8f8;
                    border-bottom: 1px solid #f8f8f8;
                }
            }
        }
        > div {
            display: flex;
            padding: 15px 20px;
            gap: 20px;
            p {
                display: inline-flex;
                align-items: flex-end;
                gap: 10px;
                color: #919191;
                b {
                    font-size: 18px;
                    color: #000;
                }
            }
        }
    }
    .content {
        padding-bottom: 50px;
        border-bottom: 1px solid #ccc;
        min-height: 500px;
        p {
            font-size: 18px;
            line-height: 1.2;
        }
    }
    .more,
    button {
        margin-top: 20px;
        border: 1px solid #ccc;
        font-weight: bold;
        font-size: 14px;
        width: 150px;
        line-height: 40px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 30px;
        margin-right: 5px;
        cursor: pointer;
    }
`;
