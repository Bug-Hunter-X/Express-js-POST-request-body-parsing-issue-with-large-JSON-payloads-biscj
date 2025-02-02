# Express.js POST Request Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where large JSON payloads sent via POST requests are not fully parsed, leading to incomplete data processing or errors.

## Bug Description

The provided `bug.js` file shows an Express.js server that uses the built-in `express.json()` middleware for parsing JSON requests. When large JSON payloads are sent, the server might only receive a portion of the data, resulting in unexpected behavior or errors.

## Solution

The `bugSolution.js` file demonstrates the fix, which involves setting the `limit` option in `express.json()` to handle larger request bodies.  This prevents unexpected truncation of the request body.

## How to reproduce the bug

1. Run `bug.js`.
2. Use a tool like Postman to send a POST request to `/data` with a large JSON payload (e.g., a JSON object with many properties).
3. Observe the incomplete or erroneous processing of the request.

## How to apply the solution

1. Replace `bug.js` with `bugSolution.js`.
2. Repeat steps 1-3 from the reproduction instructions.  You should now see the server correctly processing the entire JSON payload.