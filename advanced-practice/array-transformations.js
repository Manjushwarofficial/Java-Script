"use strict";

function groupBy(items, keySelector) {
  const groups = new Map();

  for (const item of items) {
    const key = keySelector(item);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(item);
  }

  return groups;
}

function partition(items, predicate) {
  const matching = [];
  const notMatching = [];

  for (const item of items) {
    (predicate(item) ? matching : notMatching).push(item);
  }

  return [matching, notMatching];
}

function flattenArray(items) {
  const flattened = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

function uniqueBy(items, keySelector) {
  const seen = new Set();
  const uniqueItems = [];

  for (const item of items) {
    const key = keySelector(item);

    if (!seen.has(key)) {
      seen.add(key);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

if (require.main === module) {
  const people = [
    { name: "Asha", team: "blue" },
    { name: "Ben", team: "green" },
    { name: "Chen", team: "blue" },
  ];

  console.log("Grouped teams:", [...groupBy(people, (person) => person.team)]);
  console.log("Partitioned numbers:", partition([1, 2, 3, 4, 5], (n) => n % 2 === 0));
  console.log("Flattened:", flattenArray([1, [2, [3, 4]], 5]));
  console.log(
    "Unique people:",
    uniqueBy(
      [{ id: 1, name: "A" }, { id: 1, name: "A duplicate" }, { id: 2, name: "B" }],
      (person) => person.id,
    ),
  );
}

module.exports = { groupBy, partition, flattenArray, uniqueBy };
