class Blog {
    get content() {
        return this._content;
    }
    get title() {
        return this._title;
    }
    get nickname() {
        return this._nickname;
    }

    get id() {
        return this._id;
    }

    constructor(id, nickname, title, content){
        this._id = id;
        this._nickname = nickname;
        this._title = title;
        this._content = content;
    }
};

//Alternative way to export a module
export { Blog }
