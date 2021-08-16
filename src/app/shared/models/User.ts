export interface UserModel {
    email: string,
    uid: string,
    isDisabled: boolean
}

export interface User {
    id: string,
    userModel: UserModel
}
