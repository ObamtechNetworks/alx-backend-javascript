// full_server/server.js
import express from 'express';
// eslint-disable-next-line import/extensions
import routes from './routes/index.js';

const app = express();
const port = 1245;

app.use(routes);

app.listen(port);

// Export the app
export default app;
