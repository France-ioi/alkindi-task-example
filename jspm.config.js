SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "local:": "jspm_packages/local/",
    "alkindi-task-example.css/": "src/",
    "alkindi-task-example/": "obj/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  transpiler: false,
  packages: {
    "alkindi-task-example": {
      "main": "index.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "alkindi-task-lib": "npm:alkindi-task-lib@1.1.2",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel-runtime": "npm:babel-runtime@6.20.0",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "classnames": "npm:classnames@2.2.5",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "epic-component": "npm:epic-component@0.3.1",
    "epic-linker": "npm:epic-linker@1.1.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "rc-tooltip": "npm:rc-tooltip@3.4.2",
    "react": "npm:react@15.4.1",
    "react-bootstrap": "npm:react-bootstrap@0.30.7",
    "react-dnd": "npm:react-dnd@2.1.4",
    "react-dom": "npm:react-dom@15.4.1",
    "react-redux": "npm:react-redux@5.0.1",
    "redux": "npm:redux@3.6.0",
    "redux-saga": "npm:redux-saga@0.12.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:babel-runtime@6.20.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    },
    "npm:react-bootstrap@0.30.7": {
      "map": {
        "uncontrollable": "npm:uncontrollable@4.0.3",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react-overlays": "npm:react-overlays@0.6.10",
        "invariant": "npm:invariant@2.2.2",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "warning": "npm:warning@3.0.0",
        "classnames": "npm:classnames@2.2.5",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "keycode": "npm:keycode@2.1.8"
      }
    },
    "npm:uncontrollable@4.0.3": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:react-overlays@0.6.10": {
      "map": {
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "warning": "npm:warning@3.0.0",
        "classnames": "npm:classnames@2.2.5"
      }
    },
    "npm:react-prop-types@0.4.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:react@15.4.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.8"
      }
    },
    "npm:react-dom@15.4.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.8"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    },
    "npm:rc-tooltip@3.4.2": {
      "map": {
        "rc-trigger": "npm:rc-trigger@1.8.1"
      }
    },
    "npm:rc-trigger@1.8.1": {
      "map": {
        "rc-util": "npm:rc-util@4.0.2",
        "rc-align": "npm:rc-align@2.3.3",
        "rc-animate": "npm:rc-animate@2.3.1",
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:rc-align@2.3.3": {
      "map": {
        "rc-util": "npm:rc-util@4.0.2",
        "dom-align": "npm:dom-align@1.5.2"
      }
    },
    "npm:rc-util@4.0.2": {
      "map": {
        "add-dom-event-listener": "npm:add-dom-event-listener@1.0.1",
        "shallowequal": "npm:shallowequal@0.2.2"
      }
    },
    "npm:rc-animate@2.3.1": {
      "map": {
        "css-animation": "npm:css-animation@1.3.0"
      }
    },
    "npm:add-dom-event-listener@1.0.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:css-animation@1.3.0": {
      "map": {
        "component-classes": "npm:component-classes@1.2.6"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0"
      }
    },
    "npm:component-classes@1.2.6": {
      "map": {
        "component-indexof": "npm:component-indexof@0.0.3"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash-es": "npm:lodash-es@4.17.4",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "loose-envify": "npm:loose-envify@1.3.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:react-dnd@2.1.4": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "disposables": "npm:disposables@1.0.1",
        "dnd-core": "npm:dnd-core@2.0.2",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:react-redux@5.0.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "lodash-es": "npm:lodash-es@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.0",
        "invariant": "npm:invariant@2.2.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    },
    "npm:dnd-core@2.0.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "lodash": "npm:lodash@4.17.4",
        "redux": "npm:redux@3.6.0",
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:object.assign@4.0.4": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "define-properties": "npm:define-properties@1.1.2",
        "object-keys": "npm:object-keys@1.0.11"
      }
    },
    "npm:react-dnd-html5-backend@2.1.2": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:define-properties@1.1.2": {
      "map": {
        "object-keys": "npm:object-keys@1.0.11",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:alkindi-task-lib@1.1.2": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "array.prototype.fill": "npm:array.prototype.fill@1.0.2",
        "es6-promise": "npm:es6-promise@4.0.5",
        "epic-component": "npm:epic-component@0.3.1",
        "epic-linker": "npm:epic-linker@1.1.0",
        "object.assign": "npm:object.assign@4.0.4",
        "es5-sham-ie8": "npm:es5-sham-ie8@1.0.1",
        "es6-shim": "npm:es6-shim@0.35.2",
        "rc-tooltip": "npm:rc-tooltip@3.4.2",
        "react": "npm:react@15.4.1",
        "react-dom": "npm:react-dom@15.4.1",
        "react-dnd": "npm:react-dnd@2.1.4",
        "react-redux": "npm:react-redux@5.0.1",
        "react-dnd-html5-backend": "npm:react-dnd-html5-backend@2.1.2",
        "redux": "npm:redux@3.6.0",
        "redux-saga": "npm:redux-saga@0.12.1",
        "html5shiv": "npm:html5shiv@3.7.3",
        "es5-shim": "npm:es5-shim@4.5.9"
      }
    },
    "npm:epic-linker@1.1.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:fbjs@0.8.8": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    }
  }
});
