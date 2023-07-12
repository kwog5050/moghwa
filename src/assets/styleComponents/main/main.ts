import { styled } from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 700px;
    background-color: #ccc;
`;

export const Proudct = styled.div`
    text-align: center;
    margin: 100px 0px;
    h2 {
        font-size: 28px;
        font-weight: 900;
    }
    ul {
        display: flex;
        gap: 15px;
        margin-top: 50px;
        li {
            flex: 1;
            img {
                width: 100%;
                height: 250px;
            }
            h3 {
                margin-top: 20px;
                font-size: 18px;
            }
        }
    }
`;
