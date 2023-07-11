import axios from './axios';
import { axiosInspection } from './axiosInspection';
import { handleApiError } from './handleError';
import { BoardId, Board, GetBoard, UpdataBoard } from 'interfaces/board';

const createBoard = async (data: Board): Promise<void> => {
    try {
        const res = await axios.post('/board', data);
    } catch (error) {
        handleApiError(error);
    }
};

const getBoard = async (success: (data: GetBoard[]) => void): Promise<void> => {
    try {
        const res = await axios.get('/board');
        axiosInspection(res.data, '알 수 없는 에러로 게시글 가져오기에 실패했습니다.') && success(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

const updataBoard = async (data: UpdataBoard): Promise<void> => {
    try {
        const res = await axios.patch('/board', data);
    } catch (error) {
        handleApiError(error);
    }
};

const deleteBoard = async (data: BoardId): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.id}`);
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard };
