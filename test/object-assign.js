import test from 'ava';

import Animal from '../lib/base/animal';
import Hostile from '../lib/base/hostile';

import CatObjectAssign from '../lib/cat-object-assign';
import CatObjectAssignObject from '../lib/cat-object-assign-object';

test('Object.assign(class, baseClass)', t => {
  const cat = new CatObjectAssign();

  t.false(cat instanceof Animal);
  t.false(cat instanceof Hostile);

  t.is(cat.className, 'Cat');
  t.true(typeof cat.methodA === 'function');
  t.is(cat.methodA(), 'Cat.methodA');
  t.false(typeof cat.methodB === 'function');
  t.true(typeof cat.methodC === 'function');
  t.is(cat.methodC(), 'Cat.methodC');
});

test('Object.assign(class, baseObject)', t => {
  const cat = new CatObjectAssignObject();

  t.is(cat.className, 'Cat');
  t.true(typeof cat.methodA === 'function');
  t.is(cat.methodA(), 'Hostile.methodA');
  t.true(typeof cat.methodB === 'function');
  t.is(cat.methodB(), 'Hostile.methodB');
  t.true(typeof cat.methodC === 'function');
  t.is(cat.methodC(), 'Cat.methodC');
});
