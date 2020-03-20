import { message } from 'antd';
import request from '../request';

let appStore = {
    getUserInfo: async function () {
        let res = await request('/user/info', 'get')
        if (res.status !== 200) {
            message.warning('error')
        }
        return res && res.data ? res.data : {}
    },
}

export default appStore