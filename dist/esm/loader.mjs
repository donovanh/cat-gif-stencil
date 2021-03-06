import { a as patchEsm, b as bootstrapLazy } from './core-562a4d5e.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["cat-gif",[[1,"cat-gif",{"keyword":[1],"images":[32],"imageUrl":[32]},[[2,"click","handleClick"]]]]]], options);
  });
};

export { defineCustomElements };
