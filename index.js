//agregando modulo fs para poder leer el archivono
const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const validate = require('./validate.js').validations;
const read= require('./read').rfile;


const contoller =  (path) =>{
let a =  validate(path);
let b = read(folder);



}
contoller(folder);





