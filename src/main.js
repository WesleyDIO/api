const express = require('express');
//importa a biblioteca express (express é uma funcao q retorna uma classe do tipo express)

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const router = require('./routes')
app.use(router)

require('./database/connection')

require('./usuarios/models/usuario')

app.listen(4300, () => {
    console.log('server ta no ar manito')
});