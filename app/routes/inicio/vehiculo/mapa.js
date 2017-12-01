import Route from '@ember/routing/route';

export default Route.extend({

  token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1MDg1NDE2MjEsImp0aSI6Im1vM00yUTRUNzViMlNnK0NpcThvdFZVYjVIT2pTYk5NeGFWdjY5TEs2V1E9IiwiaXNzIjoidHJhY2tpbmcuYnBzaXN0ZW1hcy5jb20iLCJuYmYiOjE1MDg1NDE2MjEsImV4cCI6NjAwMTUwODU0MTYyMSwiZGF0YSI6eyJ1c2VySWQiOiIyIiwidXNlck5hbWUiOiJsZW5ub25wcmFkbyJ9fQ.ZjfSZSt7vjxzzskDMjRiOAQXcPBUgqLhTQLZYV523LOZ6jgqyXA4cJ-qUQoSwenvUkuANMtb-A5qEHFvWR7cjw',
  ajax: Ember.inject.service(),

    model(params, transition){
      let v_id = transition.params['inicio.vehiculo'].v_id;
      let token = '&token='+this.get('token');
      return this.get('ajax').request('http://tracking.bpsistemas.com/api/maquinarias/'+v_id+'/movimientos'+token).then(response => {
          // `response` is the data from the server
          var myPolilines = [];
          response.data.forEach( function(valor, indice, array) {
            myPolilines.push([response.data[indice].attributes.p_latitud,response.data[indice].attributes.p_longitud]);
          });
          return {
                  lat: response.data[0].attributes.p_latitud,
                  lng: response.data[0].attributes.p_longitud,
                  zoom: 15,
                  polylines:[{
                      id: 'unique-polyline-id', // Recommended
                      strokeColor: 'blue',
                      strokeOpacity: 1,
                      strokeWeight: 3,
                      path: myPolilines,
                      click: function(event, polyline) {},
                      rightclick: function(event, polyline) {},
                      dblclick: function(event, polyline) {},
                      mouseover: function(event, polyline) {},
                      mouseout: function(event, polyline) {},
                      mouseup: function(event, polyline) {},
                      mousedown: function(event, polyline) {},
                      mousemove: function(event, polyline) {},
                      set_at: function(polylinePath) {},
                      insert_at: function(polylinePath) {},
                      remove_at: function(polylinePath) {}
                    }
                  ],
                  markers:[
                    {
                      id: 'unique-marker-id',  // Recommended
                      lat: response.data[0].attributes.p_latitud,
                      lng: response.data[0].attributes.p_longitud,
                      infoWindow: {
                        content: '<p>Posicion actual</p>',
                        visible: false
                      },
                      click(event, marker) {},
                      rightclick(event, marker) {},
                      dblclick(event, marker) {},
                      mouseover(event, marker) {},
                      mouseout(event, marker) {},
                      mouseup(event, marker) {},
                      mousedown(event, marker) {},
                      drag(e, marker) {},
                      dragstart(e, marker) {},
                      dragend(e, marker) {}
                    }
                  ]
              };
  //return response;
});


  }

});
