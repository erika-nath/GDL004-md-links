const read= require('./read').rfile;
const fetch = require('node-fetch');

const folder = process.argv[2];

const links = read(folder);

const array=[];


const object = {
		href: '',
		text: '',
		file:''
}


fetch(folder)





