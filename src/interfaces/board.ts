export interface Board {
    title: string;
    content: string;
    writer: string;
    noticeYn: boolean;
}

export interface GetBoard extends Board {
    id: number;
    viewCnt: number;
    deleteYn: boolean;
    createdDate: string;
    modifiedDate: null | string;
}

export interface UpdataBoard extends Board {
    id: number;
}

export interface DeleteBoard {
    id: number;
}
