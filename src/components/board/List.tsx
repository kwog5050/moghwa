import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { BoardList, GetBoard } from 'interfaces/board';

import { getBoard } from 'apis/board';

import Paging from './Pageing';

import * as Style from 'assets/styleComponents/board/list';
import Loading from 'components/loding/Loading';

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
                            <li>{a.id}</li>
                            <li>
                                <Link to={`/boardDetail/${boardType}/1`}>{a.title}</Link>
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
