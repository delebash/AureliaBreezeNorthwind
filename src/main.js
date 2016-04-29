import {Aurelia} from 'aurelia-framework';
import {bootstrap as webpackbootstrap} from 'aurelia-bootstrapper-webpack';
import '../node_modules/materialize-css/dist/css/materialize.css'
import '../styles/styles.css'
import materialize from 'materialize-css'
import breeze from 'breeze-client'


webpackbootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-breeze')
  .feature('resources');        // install application resources such as value-converters and custom html attributes.
  //  .feature('aurelia-breeze');   // install the aurelia-breeze integration plugin.


  // aurelia.start().then(() => aurelia.setRoot('app', document.body));
  aurelia.start().then(a => a.setRoot('app', document.body))
    .then(a => {
      // Initialize any frameworks you want to use
      //$(document).materialize();
    });
});
