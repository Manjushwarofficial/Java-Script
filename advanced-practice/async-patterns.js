"use strict";

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function retry(operation, { retries = 3, delayMs = 0 } = {}) {
  if (!Number.isInteger(retries) || retries < 0) {
    throw new RangeError("Retries must be a non-negative integer.");
  }
  if (!Number.isFinite(delayMs) || delayMs < 0) {
    throw new RangeError("Delay must be a non-negative number.");
  }

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;

      if (attempt < retries && delayMs > 0) {
        await delay(delayMs);
      }
    }
  }

  throw lastError;
}

async function mapWithConcurrency(items, limit, mapper) {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new RangeError("Concurrency limit must be a positive integer.");
  }
  if (typeof mapper !== "function") {
    throw new TypeError("Mapper must be a function.");
  }

  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  const workerCount = Math.min(limit, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

async function settleAll(promises) {
  const results = await Promise.allSettled(promises);
  return results.map((result) =>
    result.status === "fulfilled"
      ? { status: result.status, value: result.value }
      : { status: result.status, reason: result.reason.message },
  );
}

async function runExamples() {
  let attempts = 0;
  const result = await retry(
    async () => {
      attempts += 1;
      if (attempts < 3) {
        throw new Error("Temporary failure");
      }
      return "succeeded";
    },
    { retries: 2 },
  );

  console.log("Retry:", result, "attempts:", attempts);

  const doubled = await mapWithConcurrency([1, 2, 3, 4], 2, async (number) => {
    await delay(5);
    return number * 2;
  });
  console.log("Concurrent map:", doubled);

  console.log(
    "Settled promises:",
    await settleAll([Promise.resolve("done"), Promise.reject(new Error("failed"))]),
  );
}

if (require.main === module) {
  runExamples().catch((error) => {
    console.error("Async examples failed:", error);
    process.exitCode = 1;
  });
}

module.exports = { delay, retry, mapWithConcurrency, settleAll };
