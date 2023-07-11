import axios from './axios';
import { handleApiError, handleConnectionError } from './handleError';
import { Board, DeleteBoard, GetBoard, UpdataBoard } from 'interfaces/board';
import { AxiosResult } from 'enums/axiosResult';

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
        switch (res.data.result) {
            case AxiosResult.SUCCESS:
                success(res.data);
                break;
            case AxiosResult.ERROR:
                handleConnectionError(res.data);
                break;
            case AxiosResult.FAIL:
                alert('알 수 없는 에러로 게시글을 가져오지 못했습니다.');
                break;
            default:
                break;
        }
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

const deleteBoard = async (data: DeleteBoard): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.id}`);
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard };
