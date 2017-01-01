# Installation

```
git clone https://github.com/France-ioi/alkindi-task-example.git
cd alkindi-task-example
npm install
jspm install
```

Run `npm run serve` to start a webserver on port 8080 then load
`http://localhost:8080/index-dev.html`.

To reduce load time, `npm run build-dev` builds a bundle containing
the dependencies.  Remember to re-run this command whenever the JSPM
dependencies change.

# Setting up a new task

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
SystemJS.config Node local project path [src/]: obj/
SystemJS.config local package main [alkindi-task-example.js]: index.js
SystemJS.config transpiler (Babel, Traceur, TypeScript, None) [babel]: none
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
SystemJS.config Node local project path [src/]: obj/
SystemJS.config browser local project URL to src/ [obj/]: obj/
package.json directories.packages [jspm_packages/]: jspm_packages/
SystemJS.config browser URL to jspm_packages [jspm_packages/]: jspm_packages/
SystemJS.config local package main [alkindi-task-playfair.js]: index.js
SystemJS.config local package format (esm, cjs, amd): cjs
SystemJS.config transpiler (Babel, Traceur, TypeScript, None) [babel]: none
```

Add to package.json:
```
  "scripts": {
    "build": "babel --out-dir obj src && jspm build obj/index.js dist/index.js --minify --format umd --global-name Task",
    "build-dev": "babel --out-dir obj src && jspm bundle obj/index.js - '[obj/**/*]' + css dist/dev-bundle.js",
    "watch": "babel --watch --out-dir obj src",
    "serve": "http-server -c-1 ."
  }
```

# git

``
git init .
cat >.gitignore <<EOF
/node_modules
/jspm_packages
/dist
/obj
EOF
```

# babel

```
$ npm install --save-dev babel-cli \
  babel-preset-es2015 \
  babel-preset-react \
  babel-plugin-transform-es2015-modules-systemjs \
  babel-plugin-transform-object-rest-spread \
  babel-plugin-transform-runtime
$ cat >.babelrc <<EOF
{
  "presets": [
    "es2015",
    "react",
    {
      "plugins": [
        "transform-object-rest-spread",
        "transform-runtime",
        "transform-es2015-modules-systemjs"
      ]
    }
  ]
}
```

# React

Run:
```
jspm install npm:classnames
jspm install npm:react-bootstrap
jspm install npm:epic-component
```

# CSS

Install plugin-css and dependencies containing css files:

```
jspm install css
jspm install npm:font-awesome
jspm install bootstrap=github:twbs/bootstrap
jspm install npm:rc-tooltip
```

Loading a css is done by plugin-css, using this import syntax:
```
import "font-awesome/css/font-awesome.min.css!";
import "bootstrap/dist/css/bootstrap.min.css!";
import "rc-tooltip/assets/bootstrap.css!";
import "alkindi-task-example.css/style.css!";
```

The `!` can be left out if plugin-css is configured as the loader for
all css files in jspm.config.js:
```
  meta: {
    "*.css": {
      "loader": "css"
    }
  }
```
The "meta" option needs to be added at the top level (to apply to all .css
files), not inside `packages['alkindi-task-example'].meta` (where it would
only apply to css files inside that package).
With this setup, this works as well:
```
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-tooltip/assets/bootstrap.css";
import "alkindi-task-example.css/style.css";
```

# Linker and task library

```
jspm install npm:react-redux
jspm install npm:epic-linker
jspm install 'npm:alkindi-task-lib@^1.1.2'
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
