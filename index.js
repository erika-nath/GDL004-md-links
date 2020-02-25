//agregando modulo fs para poder leer el archivono
const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const validate = require('./validate.js').validations;
const read = require('./read.js').rfile;


const contoller =  (path) =>{
let hola=  validate(path);
let r= read(path);
}

contoller(folder);




