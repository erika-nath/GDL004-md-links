const fs = require('fs');
const folder = process.argv[2];

//*****************  Funcion que lee archivo con propiedad .readFile    *****************

const rfile = (folder) => {

	 fs.readFile(folder,'utf8',(err,data)=>{
		if (err) {
			console.log(err);
		 // return
	 }
	 console.log(data)
		
		});


};


module.exports={
	rfile


}
