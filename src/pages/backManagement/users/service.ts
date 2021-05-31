import { User } from '@/pages/types'
import req from '@/utils/req'

interface GetUserList {
    code: number;
    message: string;
    data: {
        count: number;
        rows: User[]
    }
}

interface EditUser {
    code: number;
    message: string;
    data: User
}


export const getUserList = async (page: number = 1, limit: number = 20) => {
    const res: GetUserList = await req.get('user/list', {
        params: { page, limit }
    })
    return res.data
}

export const deleteUser = async (name: string) => {
    return await req.delete('/user/del', { data: { name } })
}

export const editUser = async (user: User) => {
    const res: EditUser = await req.post('/user/update', user);
    return res.data
}

