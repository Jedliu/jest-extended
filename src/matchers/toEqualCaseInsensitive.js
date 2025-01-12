export function toEqualCaseInsensitive(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to not be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = String(actual).toLowerCase() === String(expected).toLowerCase();

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
