# JavaScript Practice

This repository contains standalone JavaScript examples, from fundamentals to
advanced practice. Examples use Node.js and can be run without installing
dependencies.

## Requirements

- Node.js 16 or newer

## Run an example

From the repository root, run a file with `node`:

```sh
node arrays.js
node advanced-practice/closures.js
```

Each advanced-practice file prints a small demonstration when run directly and
exports its solutions so they can also be imported from another CommonJS file.

## Existing fundamentals

| File | Topic |
| --- | --- |
| `arrays.js` | Arrays, nested arrays, JSON, and spread syntax |
| `class.js` | Basic class syntax |
| `data_types.js` | JavaScript data types |
| `function.js` | Functions and scope |
| `if_else.js` | Conditional statements |
| `inbuilt_funtions.js` | Built-in functions |
| `loops.js` | Looping |
| `objects.js` | Objects and object properties |
| `wordgame.js` | String concatenation and function arguments |

## Advanced practice solutions

| File | Exercises and concepts |
| --- | --- |
| [`closures.js`](./advanced-practice/closures.js) | Stateful counter closures, execute-once functions, and memoization |
| [`array-transformations.js`](./advanced-practice/array-transformations.js) | Grouping, partitioning, recursive flattening, and keyed uniqueness |
| [`algorithms.js`](./advanced-practice/algorithms.js) | Binary search, two sum, and an LRU cache |
| [`async-patterns.js`](./advanced-practice/async-patterns.js) | Retry, bounded-concurrency mapping, and settling multiple promises |

Run any advanced example independently:

```sh
node advanced-practice/closures.js
node advanced-practice/array-transformations.js
node advanced-practice/algorithms.js
node advanced-practice/async-patterns.js
```

The examples are intentionally dependency-free. For instance, solutions can be
imported and practiced with in a separate file:

```js
const { binarySearch } = require("./advanced-practice/algorithms");

console.log(binarySearch([1, 3, 5, 7], 5)); // 2
```
