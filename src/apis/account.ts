import axios from './axios';
import { handleApiError } from './handleError';
import { axiosInspection } from './axiosInspection';
import { Signup } from 'interfaces/account';

// 회원가입
const signup = async (data: Signup): Promise<void> => {
    try {
        const res = await axios.post('/user', data);
        axiosInspection(res.data) && alert('회원가입 성공');
    } catch (error) {
        handleApiError(error);
    }
};

export { signup };
