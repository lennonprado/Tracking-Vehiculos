import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movimiento-simple', 'Integration | Component | movimiento simple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{movimiento-simple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#movimiento-simple}}
      template block text
    {{/movimiento-simple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
