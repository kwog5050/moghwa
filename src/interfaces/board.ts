export interface BoardTypeData {
    tableName: string | undefined;
    boardPage: number | undefined;
}

export interface BoardId {
    id: number;
}

export interface Board {
    title: string;
    content: string;
    userId: string;
    noticeYn: boolean;
    pageCount: number;
}

export interface BoardList extends Board, BoardId {
    viewCnt: number;
    deleteYn: boolean;
    createdDate: string;
    modifiedDate: null | string;
}

export interface GetBoard {
    pageCount: number;
    boardList: BoardList[];
}

export interface UpdataBoard extends Board, BoardId {}

export interface BoardNav {
    boardPage: number;
    boardLength: number;
    url: string;
}
