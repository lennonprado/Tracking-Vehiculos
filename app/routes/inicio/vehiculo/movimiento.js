import Route from '@ember/routing/route';

export default Route.extend({

  token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1MDg1NDE2MjEsImp0aSI6Im1vM00yUTRUNzViMlNnK0NpcThvdFZVYjVIT2pTYk5NeGFWdjY5TEs2V1E9IiwiaXNzIjoidHJhY2tpbmcuYnBzaXN0ZW1hcy5jb20iLCJuYmYiOjE1MDg1NDE2MjEsImV4cCI6NjAwMTUwODU0MTYyMSwiZGF0YSI6eyJ1c2VySWQiOiIyIiwidXNlck5hbWUiOiJsZW5ub25wcmFkbyJ9fQ.ZjfSZSt7vjxzzskDMjRiOAQXcPBUgqLhTQLZYV523LOZ6jgqyXA4cJ-qUQoSwenvUkuANMtb-A5qEHFvWR7cjw',
  ajax: Ember.inject.service(),
  model(params, transition){
    let v_id = transition.params['inicio.vehiculo'].v_id;
    let token = '&token='+this.get('token');
    return this.get('ajax').request('http://tracking.bpsistemas.com/api/maquinarias/'+v_id+'/movimientos'+token);
  }

});
