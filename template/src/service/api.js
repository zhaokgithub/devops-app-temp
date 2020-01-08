import request from './request'

let Api = {
    getUserInfo: async function () {
        let res = await request('/user/info')
        if (res.status !== 200) {
            return {
                data: []
            }
        }
        return res
    },

}
export default Api