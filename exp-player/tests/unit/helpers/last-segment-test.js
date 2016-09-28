import { lastSegment } from '../../../helpers/last-segment';
import { module, test } from 'qunit';

module('Unit | Helper | last segment');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = lastSegment(['a.b.c'], {});
  assert.equal(result, 'c');
});
