import axios from './axios';
import { axiosInspection } from './axiosInspection';
import { handleApiError } from './handleError';
import { BoardId, Board, GetBoard, UpdataBoard } from 'interfaces/board';

// 게시글 작성
const createBoard = async (data: Board): Promise<void> => {
    try {
        const res = await axios.post('/board', data);
        axiosInspection(res.data, '알 수 없는 에러로 게시글 작성에 실패했습니다.');
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 가져오기
const getBoard = async (success: (data: GetBoard[]) => void): Promise<void> => {
    try {
        const res = await axios.get('/board');
        axiosInspection(res.data, '알 수 없는 에러로 게시글 가져오기에 실패했습니다.') && success(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 수정
const updataBoard = async (data: UpdataBoard): Promise<void> => {
    try {
        const res = await axios.patch('/board', data);
        axiosInspection(res.data, '알 수 없는 에러로 게시글 수정에 실패했습니다.');
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 삭제
const deleteBoard = async (data: BoardId): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.id}`);
        axiosInspection(res.data, '알 수 없는 에러로 게시글 삭제 실패했습니다.');
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard };
