import loadDatabase from './database-connection';

const query = loadDatabase({
  Users: `
    CREATE TABLE Users (
      username TEXT NOT NULL PRIMARY KEY,
      password TEXT NOT NULL
    )
  `,
  Blogentries: `
    CREATE TABLE BlogEntries (
      id BIGSERIAL NOT NULL PRIMARY KEY,
      authorUsername TEXT NOT NULL,
      body TEXT NOT NULL
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
    const results = await query(`SELECT * FROM Blogentries`);
    return results;
  },
  async create(authorUsername, body) {
    await query(
      `
        INSERT INTO Blogentries (body, authorUsername)
          VALUES ("${body}", "${authorUsername}")
      `,
    );
  },
};
