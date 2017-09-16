// 统一引入模组
const MODULES = [
	'fs',
	'events',
	'http',
	'url',
	'util',
	'querystring',
	'os',
	'path',
	'net',
	'dns',
	// 'express'
];

let loaded = {};
MODULES.forEach((value, index,array)=>{
	loaded[value] = require(value);
});
// 输出模组
module.exports = loaded;