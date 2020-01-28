'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f84f8f5b.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["cat-gif.cjs",[[1,"cat-gif",{"keyword":[1],"images":[32],"imageUrl":[32]},[[2,"click","handleClick"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
