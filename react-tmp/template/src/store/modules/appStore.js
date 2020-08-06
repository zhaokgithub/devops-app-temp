import {observable,action} from 'mobx'

class AppStore{
    @observable userInfo = {name:'name'}
    //记录当前路由
    @observable pathname = ''
    //列表查询参数
    @observable searchParams={name:'name2'}
    @observable pagination={page:1,size:10}

    @action
    setUserInfo = function(userInfo){
        this.userInfo = userInfo
    }
    @action
    setPathName = function(pathname){
        this.pathname = pathname
    }
 
    @action
    setPagination =function(params) {
        this.searchParams = Object.assign({},this.searchParams,params)
    }
}

export default new AppStore