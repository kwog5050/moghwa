import React from 'react';

import * as Style from 'assets/styleComponents/main/main';

const Main = () => {
    return (
        <>
            <Style.Banner></Style.Banner>
            <Style.Proudct>
                <div className="wrap">
                    <h2>PRODUCT</h2>
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <h3>비트 치킨무 220gX50팩</h3>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <h3>치킨무 220gX50팩</h3>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <h3>비트 치킨무 5kgX50팩</h3>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <h3>치킨무 5kgX30팩</h3>
                        </li>
                    </ul>
                </div>
            </Style.Proudct>
        </>
    );
};

export default Main;
