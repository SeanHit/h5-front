import req from '@/utils/req';

interface User {
    name: string;
    password?: string;
    start_time: number;
    create_time: number;
    end_time: number;
    update_time: number
}

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