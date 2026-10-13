"use strict";

function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    value() {
      return count;
    },
  };
}

function once(callback) {
  let hasRun = false;
  let result;

  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      result = callback.apply(this, args);
    }

    return result;
  };
}

function memoize(callback) {
  const cache = new Map();
  const resultKey = Symbol("result");

  return function (...args) {
    let node = cache;

    for (const arg of args) {
      if (!node.has(arg)) {
        node.set(arg, new Map());
      }

      node = node.get(arg);
    }

    if (!node.has(resultKey)) {
      node.set(resultKey, callback.apply(this, args));
    }

    return node.get(resultKey);
  };
}

if (require.main === module) {
  const counter = createCounter(10);
  console.log("Counter:", counter.increment(), counter.decrement(), counter.value());

  let initializationCount = 0;
  const initializeOnce = once(() => {
    initializationCount += 1;
    return "initialized";
  });
  console.log("Once:", initializeOnce(), initializeOnce(), "calls:", initializationCount);

  const square = memoize((number) => number * number);
  console.log("Memoized square:", square(5), square(5));
}

module.exports = { createCounter, once, memoize };
