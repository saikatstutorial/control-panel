export interface UserModel {
    email: string,
    uid: string
}

export interface User {
    id: string,
    userModel: UserModel
}
