class Address {
    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get street() {
        return this._street;
    }

    set street(value) {
        this._street = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }
    constructor(firstname, lastname, street, city, zip){
        this._firstname = firstname;
        this._lastname = lastname;
        this._street = street;
        this._city = city;
        this._zip = zip;
    }
}

export default Address;
