import test from 'node:test';
import assert from 'node:assert/strict';
import { composeEmail, routeFromHash } from '../src/content.js';

test('navigation accepts screen links and safely falls back for unknown hashes', () => {
  assert.equal(routeFromHash('#about'), 'about');
  assert.equal(routeFromHash('#/projects'), 'projects');
  assert.equal(routeFromHash('#contact'), 'contact');
  assert.equal(routeFromHash(''), 'home');
  assert.equal(routeFromHash('#missing'), 'home');
});

test('email drafts preserve punctuation and multiline text without injecting headers', () => {
  const uri = composeEmail({ name: '  Sam & Jo  ', email: 'sam@example.com', message: 'Hello Brian!\nCan we discuss R&D? #portfolio' });
  const parsed = new URL(uri);
  assert.equal(parsed.pathname, 'nuevobrian@gmail.com');
  assert.equal(parsed.searchParams.get('subject'), 'Portfolio inquiry from Sam & Jo');
  assert.equal(parsed.searchParams.get('body'), 'Name: Sam & Jo\nEmail: sam@example.com\n\nHello Brian!\nCan we discuss R&D? #portfolio');
  assert.deepEqual([...parsed.searchParams.keys()], ['subject', 'body']);
});
