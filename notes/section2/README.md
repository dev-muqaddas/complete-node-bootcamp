# Introduction to NodeJs and NPM

## What is NodeJs?

<aside>
π‘ NodeJs is JS runtime which provides an environment for the JS code to run outside the browser.

</aside>

## How it helps?

- It helps to use JS on the server-side of web development.
- as NodeJs is a single threaded, based on the event driven, non-blocking I/O model so it helps to build `fast`, highly `scalable` network application back-end.

## Use of NodeJs

- API with database behind it (preferably NoSQL)
- Data streaming
- Real-time chat application
- server-side web application

βIt is not useful for the applications with heavy server-side processing (CPU-intensive)

## What is Node REPL?

<aside>
π‘ *REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.*

</aside>

π pressing `tab` in Node REPL you can see all the global variables that are available in Node.

### Important Links

[How to use the Node.js REPL](https://nodejs.dev/learn/how-to-use-the-nodejs-repl)

## Modules in NodeJS

<aside>
π‘ Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

</aside>

### Types of Node modules

- Core Modules
    
    <aside>
    π‘ These core modules are compiled into Nodejs binary distribution and load automatically when Node.js process starts.
    
    </aside>
    
- Local Modules
    
    <aside>
    π‘ Local modules are modules created locally in your Node.js application
    
    </aside>
    
- Third Party Modules
    
    <aside>
    π‘ Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally.
    
    </aside>
    

### Important links

[Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)

[Node.js Modules](https://www.tutorialsteacher.com/nodejs/nodejs-modules)

[Node.js Modules - GeeksforGeeks](https://www.geeksforgeeks.org/node-js-modules/?ref=lbp)

## File System Module

[File System Node.js](Introducti%20aa56a/File%20Syste%2053412.md)

## Blocking vs Non-Blocking

<aside>
π‘ `Synchronous` β code is executed line by line it is also known as blocking code. 
`Asynchronous` β code keep executing in the background and once it get done a callback function is called to handle the result. It is also known as non-blocking code.

</aside>

 β`Callback hell` β 

βοΈΒ How to handle callback hell? β using ES6 Promises or ES8 async/await

---

## Hands-on tasks

### Important links

[HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- [ ]  Read and write file Asynchronously
- [ ]  Creating simple web server using http package and express 
π©π»βπ»Β code is in `creating-server-hhtp.js` and `creating-server-express.js`
- [ ]  Routing
βrouting basically means implementing different actions for different URLs.
βοΈΒ What is HHTP header? β It is piece of information about the response we are sending back. There are standard headers that we can specify  to inform the client. we can also write our custom headers.
    
    π©π»βπ»Β code is in `creating-server-hhtp.js` and `creating-server-express.js`
    
- [ ]  Building simple API
βοΈΒ What is an API?
API is a service from which we can request some data.
    
    <aside>
    π‘ **[Read json file content with require vs fs.readFile](https://stackoverflow.com/questions/35389060/read-json-file-content-with-require-vs-fs-readfile)
    [What is the difference between __dirname and ./ in node.js?](https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)**
    
    </aside>
    
    βIt is not recommended to read file every time you get the request. If you need that data often then load the data in the start.
    
- [ ]  Dynamically updating the html templates 
βcode is in `node-farm` folder

 

## NPM - Node Package Manager

<aside>
π‘ NPM is a command based interface app which comes included with Node JS. Use to install and manage open source packages

</aside>

βthe largest software registry in the world no matter what language we are talking about.