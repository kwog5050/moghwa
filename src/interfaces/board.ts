export interface BoardId {
    id: number;
}

export interface Board {
    title: string;
    content: string;
    writer: string;
    noticeYn: boolean;
}

export interface GetBoard extends Board, BoardId {
    viewCnt: number;
    deleteYn: boolean;
    createdDate: string;
    modifiedDate: null | string;
}

export interface UpdataBoard extends Board, BoardId {}
