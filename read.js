const fs = require('fs');
const folder = process.argv[2];

const rfile = fs.readFile(folder,'utf8',(err,data)=>{
     if (err) {
			 console.log(err);
			// return
		}/*
 else{
const expresion = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
const compara = rfile.match (expresion);
console.log(compara);
//uliza  la data y su propiedad match y dentro la const de la expression
 }*/

		console.log(data)
	});


/*

	//fetch libreria 


	// ver el video armado de regex,cambiar el nombre de la const por uno que entienda y la declaracion de 
	//new y REGEXp esa es de ley
	const regex= new RegExp( )
https?

module.exports={
	rfile
}*/