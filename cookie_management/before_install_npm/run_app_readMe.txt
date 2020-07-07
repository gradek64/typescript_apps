
Typescript needs to be compiled to the ES5 javascript so it could work on a browser. Since TS is more 
advanced that browser javascript can handle, it needs to be transpiled first to node.js javascript format. Node.js uses 
common.js modular system specification. Node.js modular sytem can be compiled and bundled by browserify to work in browser.

Additional: There are 2 javascript modular specifications
  AMD (Asynchronous module definition) loads moduls Asynchronous
  CommonJS specification used by node.js

1) run 
          "tsc-build": "tsc src/*.ts --outDir build/scripts --module CommonJS",
          "watchifyMe": "watchify build/scripts/index.js -o build/bundle.js",

2)  for instant update watch

          "tsc-watch": "tsc src/*.ts --watch  --outDir build/scripts --module CommonJS",
          "watchifyMe": "watchify build/scripts/index.js -o build/bundle.js",
3) combination of obove

            "compile_and_watch": "npm run tsc-watch & npm run watchifyMe",

5) U can also use globally installed http server , but in this case is better to run index.hml just in 
file system cause it wont need hard-reload to see changes

IMPORTANT:::
    When using &&, the first command will run, and if it does not error, the second command will run. 
    It's like a logical AND. Using &, however, will run a command in the background. 
    npm run tsc-watch will start running in the background 
    and the nnpm npm run watchifyMe will run as well regardless of what happens to the first command npm run tsc-watch.



