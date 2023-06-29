const express =require ('express');
const router =  express.Router()

const registerRoutes = require('./usuarios/controllers/usuarios-controller')
router.use(registerRoutes())

module.exports = router