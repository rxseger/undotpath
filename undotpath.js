'use strict';

function undotpath(obj) {
  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return undefined;
    const next = obj[keys[0]];
    return undotpath(next);
  } else {
    return obj;
  }
};

//console.log(undotpath({foo:{bar:{baz:123}}}));
//console.log(undotpath({foo:{bar:{baz:"abc"}}}));

module.exports = undotpath;
