import loadDatabase from './database-connection';

const query = loadDatabase({
  Users: `
    CREATE TABLE Users (
      username TEXT NOT NULL PRIMARY KEY,
      password TEXT NOT NULL
    )
  `,
  Blogentries: `
    CREATE TABLE Blogentries (
      id BIGSERIAL NOT NULL PRIMARY KEY,
      nickname TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    )
  `,
});

export const users = {
  async get(username) {
    const results = await query(
      `SELECT * FROM Users WHERE username = "${username}"`,
    );
    return results[0];
  },
  async create(username, password) {
    await query(
      `
        INSERT INTO Users (username, password)
          VALUES ("${username}", "${password}")
      `,
    );
  },
};

export const blogentries = {
  async list() {
    try{
      const results = await query(`SELECT * FROM Blogentries`);
      return results;
    } catch (e) {
      console.log(e);
    }

  },
  async create(nickname, title, content) {
    await query(
      `
        INSERT INTO Blogentries (nickname, title, content)
          VALUES ("${nickname}", "${title}", "${content}")
      `,
    );
  },
};
