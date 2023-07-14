import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { GetBoard, BoardList } from 'interfaces/board';

import { getBoard } from 'apis/board';

import Paging from './Pageing';
import Loading from 'components/loding/Loading';

import * as Style from 'assets/styleComponents/board/list';

const Board = () => {
    const nav = useNavigate();
    const { boardType, boardPage } = useParams();
    const [board, setBoard] = useState<GetBoard | undefined>(undefined);

    useEffect(() => {
        getBoard(
            {
                tableName: boardType,
                boardPage: Number(boardPage),
            },
            setBoard,
        );
    }, [nav]);

    return board === undefined ? (
        <Loading />
    ) : (
        <Style.Container>
            <div className="wrap">
                <h2>{boardType === 'notice' ? '공지사항' : '문의사항'}</h2>
                {sessionStorage.getItem('userId') === 'admin' && (
                    <Link className="write" to={`/${boardType}/write`}>
                        글쓰기
                    </Link>
                )}
                <ul className="title">
                    <li>번호</li>
                    <li>제목</li>
                    <li>글쓴이</li>
                    <li>작성일</li>
                    <li>조회수</li>
                </ul>
                {board.boardList?.map((a: BoardList, i: number) => {
                    return (
                        <ul className="list" key={i}>
                            <li>{a.bid}</li>
                            <li>
                                <Link to={`/boardDetail/${boardType}/${a.bid}`}>{a.title}</Link>
                            </li>
                            <li>{a.userId}</li>
                            <li>{a.createdDate.split(' ')[0]}</li>
                            <li>{a.viewCnt}</li>
                        </ul>
                    );
                })}
            </div>
            <Paging boardPage={Number(boardPage)} boardLength={board.pageCount} url={`/${boardType}`} />
        </Style.Container>
    );
};

export default Board;
