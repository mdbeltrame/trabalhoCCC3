const Uf = require('../models/UnidadeFederativa');
const listaUF = [];

const cadastroUF = function(request,response){

const uf= new Uf(request.body.nome,
    request.body.id,
    request.body.sigla);

    listaUF.push(uf);

    response.redirect("/lista");
};

const index =function(request,response){
    
    response.render("index");

};


const lista= function(request,response){

    response.render("uf/lista", {lista : listaUF })
}




    
module.exports.index=index;
module.exports.cadastroUF=cadastroUF;
module.exports.lista=lista;
 

    
