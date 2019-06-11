const express = require('express');
conset mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-ps6dv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
});

app.use(require('./routes'));

app.listen(3333);