'use strict';
function startFrom() {
  return function (input, start) {
    return input.slice(start);
  };
}
