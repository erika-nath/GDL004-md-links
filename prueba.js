const fs = require('fs');
const read= require('./read').rfile;
const folder = process.argv[2];
const fetch = require('node-fetch');

read(folder);

const array=[];


const object = {
		href: '',
		text: '',
		file:''
}





