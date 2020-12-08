import './theme/global.css';
import map from 'lodash/map';
import keys from 'lodash/keys';
// import * as $ from 'jquery';
// import json from './assets/p.json';
console.log('smth');
// console.log(json);
// $('pre').html(JSON.stringify(json));

function requireAll(requireContext) {
  return map(keys(requireContext), requireContext);
}

requireAll(require.context('./components', true, /^\.\/.*\.js$/)); // pattern to take each .js files
requireAll(require.context('./pages', true, /^\.\/.*\.js$/));
