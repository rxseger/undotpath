# undotpath

Destructure deeply nested structures created by [dotpath-object-create](https://www.npmjs.com/package/dotpath-object-create)

Usage:

   const undotpath = require('undotpath');

   undotpath({foo:{bar:{baz:123}}}); // returns 123

Recursively traverses nested objects, taking the first key until reaching a non-object and returns its value.

## License

MIT

