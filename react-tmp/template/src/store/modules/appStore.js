import {observable,action} from 'mobx'

class AppStore{
    @observable userInfo = null
    //记录当前路由
    @observable pathname = ''
    //列表查询参数
    @observable searchParams={}
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
    setPagination = function(pagination){
        this.pagination = Object.assign({},this.pagination,pagination)
    }
    @action
    setPagination =function(params) {
        this.searchParams = Object.assign({},this.searchParams,params)
    }
}

export default AppStore