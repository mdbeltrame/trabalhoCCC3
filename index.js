const express = require("express");
const ejs = require("ejs");// template HTML
const bodyParser = require("body-parser");// pegar parametros do request

const server = express();

const geralController = require("./controllers/geralController");

server.set("views", __dirname + "/views");//especifica onde estarão os HTML
server.set("view engine", "ejs");//diz que estamos usando EJS para template

server.use(bodyParser.urlencoded({extended:true}));

server.get("/",geralController.index);

server.post("/", geralController.cadastroUF);

server.get("/lista", geralController.lista);




server.listen(3000);