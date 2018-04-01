const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.use('/',express.static(path.join(__dirname,"public")));
app.set('view engine', 'pug')


routes.forEach(([path, route]) => {
    app.get(path, route);
})


app.listen(process.env.port || 3000, () => {
    console.log('server is now running!');
})
