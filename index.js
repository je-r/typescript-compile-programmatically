//import * as ts from "typescript";

var globalThis = require('globalthis')();


var ts = require('typescript');

const source = 
 ` let x: string  = 'some string';
   console.log("x=["+x+"]")
 `;

let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

console.log(JSON.stringify(result));

console.log("———————-")

eval(result["outputText"]);

console.log("TypeScript version: "+ts.version);