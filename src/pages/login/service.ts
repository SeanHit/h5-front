import req from '@/utils/req';
import { User } from '../types';


interface LoginRes {
    code: number;
    data: User;
    message: string

}

/** 登录 */
export const login = async (name: string, password: string) => {
    const res: LoginRes = await req.post('/user/login', {
        name,
        password
    })
    return res.data
}