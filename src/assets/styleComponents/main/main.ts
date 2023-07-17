import { styled } from 'styled-components';
import reviewBg from '../../images/reviewBg.png';

export const Banner = styled.div`
    width: 100%;
    position: relative;
    > img {
        width: 100%;
    }
    .moContent{
        display: none;
    }
    .content {
        position: absolute;
        top: 65%;
        left: 52%;
        color: #fff;
        font-size: 44px;
        font-weight: 400;
        line-height: 1.2;
        opacity: 0;
        transition: opacity 1s;
        b {
            color: #fff;
            font-size: 44px;
            font-weight: 900;
            line-height: 1.2;
        }
    }
    .content.on {
        opacity: 1;
    }
    .scrollDown {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        p {
            font-size: 10px;
            margin-bottom: 10px;
        }
        .dotCircle{
            animation: rotate 8s linear infinite;
        }
        .arrow{
            position: absolute;
            transform: translate(-50%, -50%);
            top: 62%;
            left: 50%;
        }
        @keyframes rotate{
            0%{transform:rotate(0deg);}
            100%{transform:rotate(360deg);}
        }
    }

    @media (max-width: 1800px) {
        .content {
            font-size: 30px;
            b {
                font-size: 30px;
            }
        }
    }
    @media (max-width: 1200px) {
        .content {
            font-size: 22px;
            b {
                font-size: 22px;
            }
        }
    }
    @media (max-width: 800px) {
        .content {
            top: 35%;
            left: 40%;
            font-size: 22px;
            letter-spacing: -1px;
            b {
                font-size: 22px;
                letter-spacing: -1px;
            }
        }
    }
    @media (max-width: 500px) {
        .content {
            display: none;
        }
        .moContent{
        display: block;
        background-color: rgba(0,0,0,0.4);
        border-radius: 2px;
        position: absolute;
        top: 5%;
        left: 70%;
        color: #fff;
        opacity: 1;
        transition: opacity 1s;
        padding: 5px;
        writing-mode: vertical-lr;
        p{
            font-size: 16px;
            font-weight: 400;
            padding: 5px;
        }
        b {
            color: #fff;
            font-size: 16px;
            font-weight: 900;
        }
        }
    }
`;

export const Intro = styled.div`
    text-align: center;
    padding: 100px 0px 50px;
    .wrap {
        position: relative;
        top: 100px;
        opacity: 0;
        transition: top 0.5s, opacity 1s;
    }
    .on {
        top: 0px;
        opacity: 1;
    }
    h2 {
        display: inline-block;
        border-top: 3px solid #bae148;
        border-left: 3px solid #bae148;
        border-right: 3px solid #bae148;
        padding: 10px 50px 0px 50px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Kanit';
    }
    h3 {
        font-size: 40px;
        font-weight: bold;
        margin-top: 30px;
    }
    p {
        font-size: 18px;
        line-height: 1.7;
        font-weight: 400;
        letter-spacing: -2px;
        margin-top: 50px;
    }

    @media (max-width: 700px) {
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 600px) {
        padding: 80px 0px 30px;
        h3 {
            font-size: 30px;
        }
        p {
            margin-top: 20px;
            font-size: 14px;
            &:nth-child(1) {
                br {
                    display: none;
                }
            }
        }
    }
    @media (max-width:400px){
        p{
            letter-spacing: -1px !important;
        }
    }
`;

export const Proudct = styled.div`
    text-align: center;
    padding: 50px 0px;
    h2 {
        font-size: 34px;
        font-weight: bold;
        font-family: 'Kanit';
    }
    ul {
        display: flex;
        gap: 15px;
        margin-top: 50px;
        li {
            flex: 1;
            div {
                position: relative;
                &:hover {
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #bae14822;
                        border: 3px solid #bae148;
                        border-radius: 20px;
                    }
                    a {
                        opacity: 1;
                        white-space: nowrap;
                    }
                }
                img {
                    width: 100%;
                }
                a {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 1;
                    transform: translate(-50%, -50%);
                    background-color: #97c318;
                    padding: 10px 20px;
                    font-size: 18px;
                    color: #fff;
                    border-radius: 10px;
                    opacity: 0;
                    i {
                        font-size: 16px;
                        color: #fff;
                        padding-left: 5px;
                    }
                }
            }
            h3 {
                margin-top: 20px;
                font-size: 18px;
            }
        }
    }
    @media (max-width: 700px) {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const Delivery = styled.div`
    padding: 50px 0px 0px;
    h2 {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 50px;
        text-align: center;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        justify-content: center;
        grid-gap: 30px;
        li {
            overflow: hidden;
            img {
                position: relative;
                top: -100px;
                left: 200px;
                opacity: 0;
                width: 100%;
                transition: top 1s, left 1s, opacity 1s;
            }
            p {
                font-size: 20px;
                line-height: 1.5;
                letter-spacing: -2px;
                opacity: 0;
                transition: opacity 0.5s 0.5s;
                b {
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 900;
                    letter-spacing: -2px;
                }
            }
        }
    }
    ul.on {
        li {
            img {
                opacity: 1;
                top: 0;
                left: 0;
            }
            p {
                opacity: 1;
            }
        }
    }
    @media (max-width: 1000px) {
        ul {
            li {
                p {
                    font-size: 16px;
                    b {
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width: 800px) {
        ul {
            text-align: center;
            grid-template-columns: 1fr;
        }
    }
    @media (max-width: 500px) {
        ul {
            li {
                p {
                    br {
                        display: none;
                    }
                }
            }
        }
    }
    @media (max-width: 400px) {
        li {
            
            p {
                letter-spacing: -1px !important;

                b {
                    letter-spacing: -1px !important;
                }
            }
        }
    }
`;

export const Review = styled.div`
    padding: 300px 0px 150px;
    position: relative;
    background-image: url(${reviewBg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    .board {
        background-color: #fff;
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-bottom-right-radius: 150px;
    }
    .cut {
        position: absolute;
        top: 150px;
        left: 0px;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        position: relative;
        top: -100px;
        opacity: 0;
        transition: opacity 0.5s, top 0.5s;
        li {
            img {
                width: 100%;
            }
        }
    }
    ul.on {
        top: 0;
        opacity: 1;
    }
    @media (max-width: 900px) {
        padding: 150px 0px 100px;
        .board {
            background-color: #fff;
            width: 100%;
            height: 50px;
            position: absolute;
            top: 0px;
            left: 0px;
            border-bottom-right-radius: 50px;
        }
        .cut {
            position: absolute;
            top: 50px;
            left: 0px;
            height: 80px;
        }
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }
`;
