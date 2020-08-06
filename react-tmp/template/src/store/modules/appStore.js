import {observable,action} from 'mobx'

class AppStore{
    //登录用户信息
    @observable userInfo = null;
    //记录当前路由
    @observable pathname = '';
    //列表查询参数
    @observable searchParams={};
    //列表分页参数
    @observable pagination={}

    @action
    setUserInfo = function(userInfo){
        this.userInfo = Object({},userInfo)
    }
    @action
    setPathName = function(pathname){
        this.pathname = Object({},pathname)
    }
 
    @action
    setSearchParams =function(params) {
        this.searchParams = Object.assign({},this.searchParams,params)
    }
}

export default new AppStore