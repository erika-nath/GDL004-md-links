const path = require('path');
const folder = process.argv[2];
const fs=require ('fs');


//  ******************** Funcion que valida extension .md *******************

const validations = (folder)=> {
	const ext = path.extname(folder);
	if (ext != '.md') {
		console.log(`el archivo ${folder} no es valido`)
	}
	else{
	console.log(`el archivo ${folder} si existe`)
	}
};


module.exports={
	validations

}



//regexr.com new,,,,else 