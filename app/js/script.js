require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
const name = 'John'
$('h2').eq(0).html(`Это предложение именно для вас, ${name}`)