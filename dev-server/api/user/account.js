class Account {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    constructor(id, email, password){
        this._email = email;
        this._password = password;
        this._id = id;
    }
}

export default Account;
