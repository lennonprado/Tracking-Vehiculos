import Route from '@ember/routing/route';

export default Route.extend({

  token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1MDg1NDE2MjEsImp0aSI6Im1vM00yUTRUNzViMlNnK0NpcThvdFZVYjVIT2pTYk5NeGFWdjY5TEs2V1E9IiwiaXNzIjoidHJhY2tpbmcuYnBzaXN0ZW1hcy5jb20iLCJuYmYiOjE1MDg1NDE2MjEsImV4cCI6NjAwMTUwODU0MTYyMSwiZGF0YSI6eyJ1c2VySWQiOiIyIiwidXNlck5hbWUiOiJsZW5ub25wcmFkbyJ9fQ.ZjfSZSt7vjxzzskDMjRiOAQXcPBUgqLhTQLZYV523LOZ6jgqyXA4cJ-qUQoSwenvUkuANMtb-A5qEHFvWR7cjw',
  ajax: Ember.inject.service(),

    model(params, transition){
      let v_id = transition.params['inicio.vehiculo'].v_id;
      let token = '&token='+this.get('token');
      return this.get('ajax').request('http://tracking.bpsistemas.com/api/maquinarias/'+v_id+'/movimientos'+token).then(response => {
          // `response` is the data from the server

          //let lastMove = result._result;
          //console.log(response.data[0]);
          //return lastMove;

          return {
                    lat: response.data[0].attributes.p_latitud,
                    lng: response.data[0].attributes.p_longitud,
                    zoom: 14
                  };
          //return response;
        });


/*    return {
          lat: -33.75494243654723,
          lng: -55.8359375,
          zoom: 4
        };

        */
    // return this.get('ajax').request('http://tracking.bpsistemas.com/api/maquinarias/&token='+this.get('token'));
  }

});
