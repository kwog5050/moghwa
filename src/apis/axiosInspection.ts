import { AxiosResult } from 'enums/axiosResult';
import { handleConnectionError } from './handleError';

export const inspection = (res: any): boolean => {
    switch (res.result) {
        case AxiosResult.SUCCESS:
            return true;
        case AxiosResult.ERROR:
            handleConnectionError(res);
            return false;
        case AxiosResult.FAIL:
            alert('알 수 없는 에러로 게시글을 가져오지 못했습니다.');
            return false;
        default:
            return false;
    }
};
