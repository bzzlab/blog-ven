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

    constructor(nickname, title, content){
        this._nickname = nickname;
        this._title = title;
        this._content = content;
    }
};

//Alternative way to export a module
export { Blog }
