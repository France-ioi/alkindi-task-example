# Starting a new task

This file describes the process of setting up a new task.

```
$ npm init
...
$ npm install --save-dev http-server
$ npm install --save-dev jspm@beta
```

Quick jspm init:
```
$ jspm init
Configuration file jspm.config.js does not exist, create it? [Yes]: Yes
Init mode (Quick, Standard, Custom) [Quick]: Quick
Local package name (recommended, optional): alkindi-task-example
package.json directories.baseURL: .
package.json configFiles folder [./]: ./
Use package.json configFiles.jspm:dev? [No]: No
SystemJS.config browser baseURL (optional): /
SystemJS.config Node local project path [src/]: src/
SystemJS.config local package main [alkindi-task-example.js]: index.js
SystemJS.config transpiler (Babel, Traceur, TypeScript, None) [babel]: babel
```

Standard jspm init:
```
Configuration file jspm.config.js does not exist, create it? [Yes]: Yes
Init mode (Quick, Standard, Custom) [Quick]: Standard
Local package name (recommended, optional): alkindi-task-playfair
package.json directories.baseURL: .
package.json configFiles folder [./]: ./
Use package.json configFiles.jspm:dev? [No]: No
Use package.json configFiles.jspm:browser? [No]: No
SystemJS.config browser baseURL (optional): ./
SystemJS.config Node local project path [src/]: src/
SystemJS.config browser local project URL to src/ [src/]: src/
package.json directories.packages [jspm_packages/]: jspm_packages/
SystemJS.config browser URL to jspm_packages [jspm_packages/]: jspm_packages/
SystemJS.config local package main [alkindi-task-playfair.js]: index.js
SystemJS.config local package format (esm, cjs, amd): esm
SystemJS.config transpiler (Babel, Traceur, TypeScript, None) [babel]: babel
```

Add to package.json:
```
  "scripts": {
    "build": "jspm build src/main.js dist/index.js --minify --format umd --global-name Task",
    "build-dev": "jspm bundle --minify src/alkindi-task-example.js - '[src/**/*]' + babel-plugin-transform-react-jsx + css dist/dev-bundle.js",
    "serve": "http-server ."
  }
```

# React

Run:
```
jspm install npm:babel-plugin-transform-react-jsx
jspm install npm:classnames
jspm install npm:react-bootstrap
jspm install npm:epic-component
```

Add to jspm.config:
```
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-react-jsx"
    ]
  }
```

# CSS

Install plugin-css and dependencies containing css files:

```
jspm install --dev css
jspm install npm:font-awesome
jspm install bootstrap=github:twbs/bootstrap
jspm install npm:rc-tooltip
```

Add to jspm.config:
```
  meta: {
    "*.css": {
      "loader": "css"
    }
  }
```

# Linker and task library

```
jspm install npm:react-redux
jspm install npm:epic-linker
jspm install alkindi-task-lib=github:France-ioi/alkindi-task-lib@master
```

# Copy boilerplate

Copy boilderplate files from this project:

- index.html
- index-dev.html
- src/index.js
- src/answer_dialog.js
- src/task.js
- src/workspace.js

In `index-dev.html` replace `alkindi-task-example` with the package name
and fill in the development task object.

