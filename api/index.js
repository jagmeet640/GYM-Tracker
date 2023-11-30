// back end file
// npm i express
// node api/index.js to start server
// nodemon install

// npm run dev to start server on nodemon
// npm run start to start server on node

import express from 'express'

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
