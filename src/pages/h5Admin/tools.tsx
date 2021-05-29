import { history } from 'umi';
export const handleEditor = (tid) => {
    history.push(`/editor?tid=${tid}`);
}