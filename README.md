# NodeJS App

## [Web Viewer(click)](https://nodejsappsens.herokuapp.com/)


+ init
    ```git
    git init
    npm init -y
    ```
+ install express 
    ```
    npm install --save express
    ```
+ install ejs / ejs-layouts / ejs-lint
    ```
    npm install --save ejs
    npm install --save express-ejs-layouts
    npm install -g ejs-lint
    
    ```
+ install body-parser
    ```
    <!-- post 방식에 필요하다. -->
    npm install --save body-parser

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    ```
    ```
    ─node_modules

    │  ├─ejs
    │  │  ├─bin
    │  │  └─lib

    │  ├─express
    │  │  └─lib
    │  │      ├─middleware
    │  │      └─router

    └─public

    └─views
        ├─components
        ├─layouts
        └─pages
    ```
