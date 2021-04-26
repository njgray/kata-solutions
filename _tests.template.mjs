// import fn from './*.solution.mjs';

function test(func, args, expected, assertion) {
  const msg = `Testing: ${func.name}(${args}) === ${expected}`;
  const start = (new Date()).getTime();
  const actual = func(...args);
  const passed = assertion(actual, expected, console.assert);
  const execTime = ( Date.now() - start + 'ms');

  const result = '  Result: ' + (passed ? 'Passed' : 'Failed');
  console.log(msg + ' :: ' + result + ' :: ' + execTime);
}

function assertEqual(actual, expected, assert) {
  const assertion = actual === expected;
  const msg = `${actual} === ${expected}`;

  assert(assertion, msg);

  return assertion;
}


console.time('Test Suite Time');

// test(fn, [10], 22, assertEqual);

console.timeEnd('Test Suite Time');

