// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.SQLITE_FILENAME
    }
  }
};
