const app = require('./src/server');

app.listen(process.env.port || 3000, () => console.log(`[INFO] Server ON`));