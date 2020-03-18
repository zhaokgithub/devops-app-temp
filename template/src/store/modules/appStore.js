import {observable,action} from 'mobx'

class AppStore{
    @observable userInfo = null
    @observable pathname = ''

    @action
    setUserInfo = function(userInfo){
        this.userInfo = userInfo
    }
    @action
    setPathName = function(pathname){
        this.pathname = pathname
    }
}

export default AppStore