console.log('sunil'); //console is an object, log() is method or property of the object we are using with

console.log(100, 'sample', false); // passing different datatypes of data to the console

console.error('error in code'); //this is used by developers to through errors from the code to the console with console object and error() method

console.warn('warnings from code'); //this is used by developers to through warnings of the code to the console with console object and error() method

console.table({ name: 'sunil', age: 30, country: 'India', married: 'true' }); // through object containing key value pairs in the form of table to console.

console.log('Sunil');
console.error('error in code');
console.warn('warnings from code');
console.groupEnd(); // end the console group

const styles = 'padding:10px; color:orange; background-color:grey';

console.log('%cHey This Sunil testing the code', styles); // applying styles to the console content