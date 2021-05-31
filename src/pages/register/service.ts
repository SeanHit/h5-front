import req from '@/utils/req';
import { User } from '../types';

interface RegisterRes {
    code: number;
    data: User;
    message: string;
}

/** 注册账号 */
export const register = async (name: string, password: string, tel: string, sex: number) => {
    const res: RegisterRes = await req.post('/user/add', {
        name,
        password,
        tel,
        sex
    })
    return res.data
}