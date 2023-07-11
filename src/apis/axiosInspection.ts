import { AxiosResult } from 'enums/axiosResult';
import { handleConnectionError } from './handleError';

export const inspection = (res: any, msg: string): boolean => {
    switch (res.result) {
        case AxiosResult.SUCCESS:
            return true;
        case AxiosResult.ERROR:
            handleConnectionError(res);
            return false;
        case AxiosResult.FAIL:
            alert(msg);
            return false;
        default:
            return false;
    }
};
