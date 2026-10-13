"use strict";

function binarySearch(sortedNumbers, target) {
  let left = 0;
  let right = sortedNumbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = sortedNumbers[middle];

    if (value === target) {
      return middle;
    }

    if (value < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

function twoSum(numbers, target) {
  const indexByValue = new Map();

  for (let index = 0; index < numbers.length; index += 1) {
    const complement = target - numbers[index];

    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), index];
    }

    indexByValue.set(numbers[index], index);
  }

  return null;
}

class LRUCache {
  #capacity;
  #entries = new Map();

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("Capacity must be a positive integer.");
    }

    this.#capacity = capacity;
  }

  get(key) {
    if (!this.#entries.has(key)) {
      return undefined;
    }

    const value = this.#entries.get(key);
    this.#entries.delete(key);
    this.#entries.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.#entries.has(key)) {
      this.#entries.delete(key);
    } else if (this.#entries.size === this.#capacity) {
      const leastRecentlyUsedKey = this.#entries.keys().next().value;
      this.#entries.delete(leastRecentlyUsedKey);
    }

    this.#entries.set(key, value);
  }

  get size() {
    return this.#entries.size;
  }
}

if (require.main === module) {
  console.log("Binary search:", binarySearch([2, 4, 6, 8, 10], 8));
  console.log("Two sum indices:", twoSum([2, 7, 11, 15], 9));

  const cache = new LRUCache(2);
  cache.set("a", 1);
  cache.set("b", 2);
  cache.get("a");
  cache.set("c", 3);
  console.log("LRU cache:", { a: cache.get("a"), b: cache.get("b"), c: cache.get("c") });
}

module.exports = { binarySearch, twoSum, LRUCache };
