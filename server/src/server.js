require('dotenv').config();
const express = require('express');
const configView = require('./config/configView')
const webRoute = require('./routes/route');
const db = require('./config/configFirebase')

const app = express();
const port = process.env.PORT || 5555;
const hostname = process.env.HOST_NAME;

//config 'views' + 'public'
configView(app);

//route
app.use('/', webRoute);


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});