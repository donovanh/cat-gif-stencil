'use strict';

const core = require('./core-f84f8f5b.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["cat-gif.cjs",[[1,"cat-gif",{"keyword":[1],"images":[32],"imageUrl":[32]},[[2,"click","handleClick"]]]]]], options);
});
