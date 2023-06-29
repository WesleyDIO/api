const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario');
const { where } = require('sequelize');

function createRoute(){
    routes.post('/usuarios/cadastro', async (req,res) => {
        console.log('create: ', req.body)
        await Usuario.create(req.body)
       // console.log('usuario criado com sucesso')
        res.json([]);
    });
}

function findAllRoute(){

    routes.get('/usuarios', async (req,res) => {
        const usuarios = await Usuario.findAll();

        console.log(usuarios.every(user => user instanceof Usuario));
        console.log("Todos usuarios: ", JSON.stringify(usuarios, null, 2));

        res.json(usuarios);
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:id', async (req,res) => {
        console.log(req.params.id)
        res.json(await Usuario.findOne({
            where:{
               id: req.params.id
            }
        }));
    });
}

function updateRoute(){
    routes.put('/usuarios', async (req,res) => {

        console.log(req.body.id);

        await Usuario.update( req.body,{where:{
            id:req.body.id
        }})
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/usuarios/:id', async (req,res) => {
        await Usuario.destroy({  
            where:{
            id: req.params.id
        }})
        res.json([]);
    });
}


function registerRoutes(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}


module.exports = registerRoutes