---
id: 2
title: "Check if setup completed correctly"
type: "text"
---

You should now have the following file structure:
```
dashJS_example
|-- node_modules
|   |-- (all the node modules)
|-- src
|   |-- index.js
|-- package.json
|-- package-lock.json
```

To test the setup place console.log("hello"); inside src/index.js.
Then in the console type npm start.
If everything worked you should get an output similar to:

```
> dashjs_example@1.0.0 start ~/dashJS_example
> node src/index.js

hello
```

Delete the content of `index.js` again.