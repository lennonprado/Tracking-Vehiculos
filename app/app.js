import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

/*
jQuery(document).ready(function () {
  jQuery(".dropdown-button").dropdown();
  jQuery("#sideNav").click(function(){
    if(jQuery(this).hasClass('closed')){
      jQuery('.navbar-side').animate({left: '0px'});
      jQuery(this).removeClass('closed');
      jQuery('#page-wrapper').animate({'margin-left' : '260px'});
      
    }
    else{
      jQuery(this).addClass('closed');
      jQuery('.navbar-side').animate({left: '-260px'});
      jQuery('#page-wrapper').animate({'margin-left' : '0px'}); 
    }
  });
  
      mainApp.initFunction(); 
  });

  jQuery(".dropdown-button").dropdown();*/