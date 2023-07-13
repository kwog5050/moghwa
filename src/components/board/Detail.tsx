import React from 'react';
import { Link, useParams } from 'react-router-dom';

import * as Style from 'assets/styleComponents/board/detail';

const Detail = () => {
    const { boardType, boardPage } = useParams();
    return (
        <Style.Container>
            <div className="wrap">
                <h2>{boardType === 'notice' ? '공지사항' : '문의사항'}</h2>
                <div className="title">
                    <ul>
                        <li>
                            <div>제목</div>
                            <div>1</div>
                        </li>
                        <li>
                            <div>작성자</div>
                            <div>admin</div>
                        </li>
                    </ul>
                    <div>
                        <p>
                            <b>작성일</b>23/07/12
                        </p>
                        <p>
                            <b>조회수</b>1
                        </p>
                    </div>
                </div>
                <div className="content">
                    <p></p>
                </div>
                <Link to={`/${boardType}/1`} className="more">
                    목록
                </Link>
                <button>삭제</button>
            </div>
        </Style.Container>
    );
};

export default Detail;
