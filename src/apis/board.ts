import axios from './axios';
import { handleApiError, handleConnectionError } from './handleError';
import { Board, DeleteBoard, GetBoard, UpdataBoard } from 'interfaces/boardInterface';

const createBoard = async (data: Board): Promise<void> => {
    try {
        const res = await axios.post('/board', data);
        if (!handleConnectionError(res.data)) {
            return;
        }
    } catch (error) {
        handleApiError(error);
    }
};

const getBoard = async (success: (data: GetBoard[]) => void): Promise<void> => {
    try {
        const res = await axios.get('/board');
        if (!handleConnectionError(res.data)) {
            return;
        }
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

const updataBoard = async (data: UpdataBoard): Promise<void> => {
    try {
        const res = await axios.patch('/board', data);
        if (!handleConnectionError(res.data)) {
            return;
        }
    } catch (error) {
        handleApiError(error);
    }
};

const deleteBoard = async (data: DeleteBoard): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.id}`);
        if (!handleConnectionError(res.data)) {
            return;
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard };
