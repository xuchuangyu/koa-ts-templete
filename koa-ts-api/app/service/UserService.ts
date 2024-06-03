import userModel from "../model/userModel"


class UserService{
    getUsersByUserName(username:string){
        return userModel.findOne({
          username
        })
    }
    getUsersByEmail(email:string){
        return userModel.findOne({
          email
        })
    }
    addUser(data:any){
      return userModel.create(data)
    }
}

export default new UserService