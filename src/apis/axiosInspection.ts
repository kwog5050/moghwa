import { AxiosResult } from 'enums/axiosResult';
import { handleConnectionError } from './handleError';

export const axiosInspection = (res: any, msg: string): boolean => {
    switch (res.result) {
        case AxiosResult.SUCCESS:
            return true;
        case AxiosResult.FAIL:
            alert(msg);
            return false;
        case AxiosResult.ERROR:
            handleConnectionError(res);
            return false;
        default:
            return false;
    }
};
