import axios from './axios';
import { handleApiError } from './handleError';
import { axiosInspection } from './axiosInspection';
import { Login, Signup } from 'interfaces/account';

// 회원가입
const signup = async (data: Signup): Promise<void> => {
    try {
        const res = await axios.post('/user', data);
        axiosInspection(res.data) && login({ userId: data.userId, userPw: data.userPw });
    } catch (error) {
        handleApiError(error);
    }
};

// 로그인
const login = async (data: Login): Promise<void> => {
    try {
        const res = await axios.post('/login', data);
        axiosInspection(res.data) && window.location.replace('/');
    } catch (error) {
        handleApiError(error);
    }
};

export { signup, login };
