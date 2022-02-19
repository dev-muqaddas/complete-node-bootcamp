# File System Node.js

### Importance links

[Node.js - File System](https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)

[File system | Node.js v17.5.0 Documentation](https://nodejs.org/api/fs.html)

<aside>
💡 Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (fs) module can be imported using the following syntax −

</aside>

```jsx
var fs = require("fs")
```

❗All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

### Deleting File

Promise based example

❗The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.

```jsx
import { unlink } from 'fs/promises';

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}
```

Callback Example

```jsx
import { unlink } from 'fs';

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
```

Synchronous example

```jsx
import { unlinkSync } from 'fs';

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
```

-