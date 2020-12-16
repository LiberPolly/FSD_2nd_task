import './theme/global.css';
import './theme/variables.css';
// import keys from 'lodash/keys';
import map from 'lodash/map';
// import * as $ from 'jquery';
// import json from './assets/p.json';
console.log('smth');
// console.log(json);
// $('pre').html(JSON.stringify(json));

function requireAll(requireContext) {
  return map(requireContext.keys(), requireContext);
}

requireAll(require.context('./components', true, /^\.\/.*\.js$/)); // pattern to take each .js files
requireAll(require.context('./pages', true, /^\.\/.*\.js$/));
