import api_back from "../utils/api-back";

class UserClass {
    _username = ''
    _password = ''
    _status = false

    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    async authUser() {
        await api_back.post(
            'users/auth',
            {
                "username": this._username,
                "password": this._password
            }
        ).then(
            response => {
                this._status = response.data.login
            }
        ).catch(
            err => { console.log(err) }
        )
    }
}

export default UserClass;