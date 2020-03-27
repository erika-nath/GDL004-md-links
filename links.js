const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const read= require('./read').rfile;



const r = .rfiler(folder);
console.log(r);


/*

const 
const getLinks = read(folder,'utf8',(err,data)=>{
     if (err) {
			 console.log(err);
			// return
		}
 else{
const expresion = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
const compara = rfile.match (expresion);
console.log(compara);
const vlinks = data.match (expresion);
console.log(vlinks);
//uliza  la data y su propiedad match y dentro la const de la expression
 }

		console.log(data);

};
*/
