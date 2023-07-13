import axios from './axios';
import { axiosInspection } from './axiosInspection';
import { handleApiError } from './handleError';
import { BoardId, Board, GetBoard, UpdataBoard, BoardTypeData } from 'interfaces/board';

// 게시글 작성
const createBoard = async (data: Board): Promise<void> => {
    try {
        const res = await axios.post('/board', data);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 가져오기
const getBoard = async (data: BoardTypeData, success: (data: GetBoard) => void): Promise<void> => {
    try {
        const res = await axios.get(`/board/${data.tableName}?page=${data.boardPage}`);
        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 수정
const updataBoard = async (data: UpdataBoard): Promise<void> => {
    try {
        const res = await axios.patch('/board', data);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 삭제
const deleteBoard = async (data: BoardId): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.id}`);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard };
