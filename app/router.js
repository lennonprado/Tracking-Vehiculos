import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('inicio', function(){
    this.route('vehiculo', {path: 'vehiculo/:v_id'}, function(){
      this.route('mapa');
      this.route('detalle');
      this.route('movimiento');
    });
  });

});

export default Router;
