const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

require('./routes')(app);

app.listen(port, () => {
    console.log('Here to save the day...', port);
 })