In a folder `8-api` located at the root of the project directory, copy this `package.json` over.

```
{
  "name": "8-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

**Create a new file `api.js`:**

-   By using `express`, create an instance of `express` called `app`
-   Listen to port 7865 and log `API available on localhost port 7865` to the browser console when the `express` server is started
-   For the route `GET /`, return the message `Welcome to the payment system`

**Create a new file `api.test.js`:**

-   Create one suite for the index page:
    -   Correct status code?
    -   Correct result?
    -   Other?

**Server**

Terminal 1

```
bob@dylan:~/8-api$  node api.js
API available on localhost port 7865
```

Terminal 2

```
bob@dylan:~/8-api$  curl http://localhost:7865 ; echo ""
Welcome to the payment system
bob@dylan:~/8-api$  
bob@dylan:~/8-api$ npm test api.test.js

&gt; 8-api@1.0.0 test /root/8-api
&gt; ./node_modules/mocha/bin/mocha "api.test.js"



  Index page
    ✓ ...
    ✓ ...
    ...

  23 passing (256ms)

bob@dylan:~/8-api$
```

**Tips:**

-   Since this is an integration test, you will need to have your node server running for the test to pass
-   You can use the module `request`

**Requirements:**

-   You should be able to run the test suite using `npm test api.test.js`
-   Every test should pass without any warnings