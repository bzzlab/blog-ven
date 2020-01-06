## Get started with the server (backend)
### Prerequisite
You need to install [nodejs](https://nodejs.org/en/) in order to install the required infrastructure. With the installation of nodejs the tool `npm` (Node package manager) is included.

### Remarks 
1. When using  `npm` on the command line the usage differs on Windows and MacOS.
* On Windows you can use the `npm ...` straight away: Example: `npm install`
* On MacOS - if you open the terminal as non-administrator - then use it with the `sudo`-command 
Example: `sudo npm install` and then type  in the administrator password
2. In the following installation guide the `sudo`-command is omitted but be aware of the if you're an Apple user.

### Installation guide
1. Download the zip-file and extract the app     
2. Change into the app directory i.e.
```
cd form-client-v1
```
3. Install app dependencies
```
npm install
```

4. Build application
```
npm run build-dev
```

4. Run application
```
npm run serve-dev
```


## Get started with the server (backend)
### Prerequisite
1. You need `express` (so called middleware) for routing in the backend.
The command below installs `express` for the application and saves the dependency.
```
npm install express --save
```
2. Optional let's install `nodemon` (a tool for monitoring backend code). This tool restarts the server automatically when a change in the code has been detected.
This replaces a manual restart of the server.
The command below installs `nodemon` globally for this and all future applications. No dependency is needed.
```
npm install nodemon -g
```

3. In order to use the `import`-statement (instead of require) according to new ES2015+ (ES6) JavaScript
language standard, babel as transpiler is needed.
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
Create a config file named babel.config.js in the *root* of your project with this content:
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

4. Execute more than one script at the same time (concurrent).
```
npm install concurrently --save-dev
```

5. Install CORS (Cross-Origin Resource Sharing, see package info https://www.npmjs.com/package/cors, background see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and morgan (application logger, see package info https://www.npmjs.com/package/morgan) and save it to the *developer* dependencies.
```
npm install cors morgan --save-dev
```

5. In order to parse (analysieren) incoming (HTTP) request bodies in a middleware before your handlers (available under the req.body property) we need to install body-parser (Body-parser in the http-request, see package info https://www.npmjs.com/package/body-parser) and save it to the *main* dependencies.
```
$ npm install body-parser --save
```

### How to test the REST-API
#### Postman
Postman is a tool for testing the backend API. The following show different requests

##### ORDER get
GET-Request: 
```
localhost:3000/api/order
```

##### ORDER post
POST-Request: 
```
localhost:3000/api/order
```
Data: 
```
{
    "email": "anna.muster@beispiel.ch",
    "password": "test",
    "firstname": "Hans",
    "lastname": "Muster",
    "street": "seestrasse 955",
    "city": "horgen",
    "zip": "8600",
    "numOfTickets": "3"
}
```
Example response:
```
{
    "message": "We received your order!",
    "id": "10-8"
}
```

### Helpers and Quirks

#### Start building production code including a watch 
```
node_modules/.bin/babel dev-server --out-dir prod-server --watch
```

#### Setting development or production mode in package.json -> scripts
Setting the running mode differs between MacOS and Windows.  
* for MacOS
```
...
"temp": "export NODE_ENV=production  && nodemon prod-server/index.js"
...
```

* for Windows
```
...
"temp": "set NODE_ENV=production  && nodemon prod-server/index.js"
...
```



